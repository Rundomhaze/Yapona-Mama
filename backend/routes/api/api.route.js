const router = require('express').Router();

const { UsersFood } = require('../../db/models');

router
  .get('/cart', async (req, res) => {
    // const { user } = req.session;

    // if (user) {
    const { user_id } = req.body;

    const order = await UsersFood.findAll();

    // const order = await Order.findAll({
    //   raw: true,
    //   order: [['id', 'DESC']],
    //   include: [{
    //     model: OrdersFood,
    //     where: { user_id: Number(user_id) },
    //     required: false,
    //   }],
    // });

    res.status(201).json({ order });
    // } else {
    //   res.redirect('/login');
    // }
  });

module.exports = router;
