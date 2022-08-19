const router = require('express').Router();

const { Order, OrdersFood, Food } = require('../../db/models');

router
  .get('/cart', async (req, res) => {
    // При успехе ответ содержит информацию о товарах в корзине
    const { user_id } = req.body;

    try {
      const orderDetails = await Order.findAll({
        raw: true,
        where: {
          user_id,
          is_ordered: false,
        },
      });

      if (orderDetails.length) {
        const orderId = orderDetails[0].id;

        const orderFoods = await OrdersFood.findAll({
          raw: true,
          attributes: ['quantity', 'food_id'],
          where: {
            order_id: orderId,
          },
          include: [{
            model: Food,
            attributes: ['title', 'description', 'photo', 'new_price'],
          }],
        });
        res.status(201).json({ orderDetails, orderFoods });
      } else {
        res.status(201).json({ orderDetails });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  })
  .put('/cart', async (req, res) => {
    // Оформление заказа, очистка корзины
    const {
      order_id, comment, street, house, entrance, floor, flat,
    } = req.body;

    // Находим текущий заказ
    const order = Order.findByPk(order_id);

    if (order) {
      // Находим товары текущего заказа
      const orderFoods = await OrdersFood.findAll({
        raw: true,
        where: {
          order_id,
        },
      });

      // Перебираем товары и проставляем им актуальные цены, cчитаем итоговую стоимость
      let total = 0;

      orderFoods.forEach(async (food, index) => {
        const foodDetails = await Food.findByPk(food.food_id, { raw: true });
        const { new_price } = foodDetails;

        total += new_price;

        await OrdersFood.update({
          price: new_price,
        }, {
          where: {
            food_id: food.food_id,
            order_id,
          },
        });

        // В конце перебора обновляем информацию о заказе
        if (index === orderFoods.length - 1) {
          await Order.update({
            total_price: total,
            is_ordered: true,
            comment,
            street,
            house,
            entrance,
            floor,
            flat,
          }, {
            where: { id: order_id },
          });
        }
      });
    }
  })
  .post('/cart', async (req, res) => {
    // Добавление товара в корзину
    const { user_id, food_id, quantity } = req.body;

    const order = await Order.findAll({
      raw: true,
      where: {
        user_id,
        is_ordered: false,
      },
    });

    let id;

    if (order.length) {
      id = order[0].id;
    } else {
      const newOrder = await Order.create({ user_id });

      id = newOrder.id;
    }
    try {
      const newOrderFood = await OrdersFood.create({ order_id: id, food_id, quantity });
      res.status(201).json(newOrderFood);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
module.exports = router;
