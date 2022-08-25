/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
const router = require('express').Router();

const TelegramBot = require('node-telegram-bot-api');
const {
  Order, OrdersFood, Food, TelegramChat, User,
} = require('../../db/models');

const token = '5400872641:AAGRVwB_vpkDszos-j5_wOhClNAY1FZssdI';
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, async (msg, match) => {
  const chatId = msg.chat.id;
  const chat = await TelegramChat.findOne({
    raw: true,
    where: {
      chatId,
    },
  });

  if (chat) {
    console.log('Telegram Bot: Allready registred.');
    bot.sendMessage(chatId, 'Хм, Вы уже зарегистрированы...');
  } else {
    TelegramChat.create({ chatId });
    console.log('Telegram Bot: New user registred.');
    bot.sendMessage(chatId, 'Поздравляем! \nТеперь вы будете получать сообщения с новыми заказами.');
  }
});
function formatDate(date) {
  const d = date;
  let month = `${d.getMonth() + 1}`;
  let day = `${d.getDate()}`;
  const year = d.getFullYear();

  if (month.length < 2) { month = `0${month}`; }
  if (day.length < 2) { day = `0${day}`; }

  return [year, month, day].join('-');
}

const createMail = (order, foods) => {
  let foodsList = '';
  foods.forEach((food, index) => {
    foodsList += `${index + 1}. ${food['Food.title']}\n`
      + `    ${food['Food.new_price']} руб. х ${food.quantity} шт. = ${food['Food.new_price'] * food.quantity} руб.\n`;
  });

  const message = `*Заказ №${order.id} от ${formatDate(order.updatedAt)}*\n\n`
    + `_Телефон:_ ${order.phone}\n`
    + `_Улица:_ ${order.street || '-'}\n`
    + `_Дом:_ ${order.house || '-'}\n`
    + `_Подъезд:_ ${order.entrance || '-'}\n`
    + `_Этаж:_ ${order.floor || '-'}\n`
    + `_Квартира:_ ${order.flat || '-'}\n`
    + `_Комментарий:_ ${order.comment || '-'}\n\n`
    + `${foodsList}\n`
    + `Итого: ${order.total_price} руб.\n`;

  return message;
};

router
  .get('/cart', async (req, res) => {
    // При успехе ответ содержит информацию о товарах в корзине
    // const { user_id } = req.body;

    const user_id = req.session.userId;

    try {
      const orderDetails = await Order.findOne({
        raw: true,
        where: {
          user_id,
          is_ordered: false,
        },
      });

      if (orderDetails) {
        const orderId = orderDetails.id;

        const orderFoods = await OrdersFood.findAll({
          raw: true,
          attributes: ['quantity', 'order_id', 'food_id'],
          where: {
            order_id: orderId,
          },
          include: [{
            model: Food,
            attributes: ['title', 'description', 'photo', 'new_price'],
          }],
        });
        res.status(200).json({ orderDetails, orderFoods });
      } else {
        const newOrder = await Order.create({ user_id });
        res.status(200).json({ orderDetails: newOrder, orderFoods: [] });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .post('/cart', async (req, res) => {
    const {
      order_id, food_id, total_price,
    } = req.body;

    const orderFood = await OrdersFood.findOne({
      raw: true,
      where: {
        order_id, food_id,
      },
    });

    if (orderFood) {
      await OrdersFood.update({
        quantity: orderFood.quantity + 1,
      }, {
        where: { food_id, order_id },
      });
    } else {
      await OrdersFood.create({ order_id, food_id, quantity: 1 });
    }

    await Order.update({
      total_price,
    }, {
      where: { id: order_id },
    });

    res.status(200).json({ message: 'Updated successfully' });
  })
  .put('/cart', async (req, res) => {
    const {
      order_id, food_id, quantity, total_price,
    } = req.body;

    await OrdersFood.update({
      quantity,
    }, {
      where: { food_id, order_id },
    });

    await Order.update({
      total_price,
    }, {
      where: { id: order_id },
    });

    res.status(200).json({ message: 'Updated successfully' });
  })
  .delete('/cart', async (req, res) => {
    const { order_id, food_id, total_price } = req.body;

    const orderFood = await OrdersFood.findOne({
      where: {
        order_id, food_id,
      },
    });

    await orderFood.destroy();

    await Order.update({
      total_price,
    }, {
      where: { id: order_id },
    });

    res.status(200).json({ message: 'Deleted successfully' });
  })
  .post('/order', async (req, res) => {
    const {
      order_id,
      total_price,
      comment,
      phone,
      street,
      house,
      entrance,
      floor,
      flat,
      foods,
    } = req.body;

    const currPhone = phone
      .split('')
      .filter((el) => el != '-' && el != '(' && el != ')')
      .join('');

    let order;

    if (order_id) {
      await Order.update({
        total_price,
        comment,
        phone: currPhone,
        street,
        house,
        entrance,
        floor,
        flat,
        is_ordered: true,
      }, {
        where: { id: order_id },
      });

      await Promise.all(foods.map(async (food) => {
        console.log(food);
        await OrdersFood.update({
          price: food['Food.new_price'],
        }, {
          where: { order_id, food_id: food.food_id },
        });
      }));

      order = await Order.findByPk(order_id);
    } else {
      order = await Order.create({
        total_price,
        comment,
        phone,
        street,
        house,
        entrance,
        floor,
        flat,
        is_ordered: true,
      });

      await Promise.all(foods.map(async (food) => {
        await OrdersFood.create({
          order_id: order.id,
          food_id: food.food_id,
          quantity: food.quantity,
          price: food['Food.new_price'],
        });
      }));
    }

    const orderFoods = await OrdersFood.findAll({
      raw: true,
      attributes: ['quantity', 'order_id', 'food_id'],
      where: {
        order_id: order_id || order.id,
      },
      include: [{
        model: Food,
        attributes: ['title', 'description', 'photo', 'new_price'],
      }],
    });

    const message = createMail(order, orderFoods);
    const chats = await TelegramChat.findAll();
    if (chats.length > 0) {
      chats.forEach((chat) => {
        bot.sendMessage(chat.chatId, message, { parse_mode: 'markdown' });
      });
    } else {
      console.log('Telegram Bot: No registred chats.');
    }

    res.status(200).json({ message: 'Order updated successfully' });
  })
  .get('/orderlist', async (req, res) => {
    const user_id = req.session.userId;
    const orders = await Order.findAll({
      raw: true,
      where: {
        user_id,
        is_ordered: true,
      },
    });

    const newOrders = await Promise.all(orders.map(async (order) => {
      order.foods = await OrdersFood.findAll({
        raw: true,
        where: {
          order_id: order.id,
        },
        attributes: ['quantity', 'price'],
        include: [{
          model: Food,
          attributes: ['title', 'new_price'],
        }],
      });
      return order;
    }));

    res.status(200).json({ newOrders });
  });

module.exports = router;
