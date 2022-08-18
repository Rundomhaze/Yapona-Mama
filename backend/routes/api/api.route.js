const router = require('express').Router();

const { User, OrdersFood, Order } = require('../../db/models');

router
  .get('/cart', async (req, res) => {
    // const { user } = req.session;

    // if (user) {
    const { user_id } = req.body;

    const order = await OrdersFood.findAll({
      raw: true,
      order: [['id', 'DESC']],
      include: [{
        model: Order,
        where: { user_id },
        required: false,
      }],
    });
    res.status(201).json({ order });
    // } else {
    //   res.redirect('/login');
    // }
  });
