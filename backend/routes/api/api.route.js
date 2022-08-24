/* eslint-disable camelcase */
const router = require('express').Router();

const { Order, OrdersFood, Food } = require('../../db/models');

const { sequelize } = require('../../db/models');

router
  .get('/cart', async (req, res) => {
    // При успехе ответ содержит информацию о товарах в корзине
    // const { user_id } = req.body;

    const user_id = req.session.user.id;

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
          attributes: ['quantity', 'order_id', 'food_id'],
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
  })
  .post('/order', async (req, res) => {
    const { order_id, food_id, total_price } = req.body;
  });

module.exports = router;
