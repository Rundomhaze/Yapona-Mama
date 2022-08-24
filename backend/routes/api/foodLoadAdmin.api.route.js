const foodLoadAdminRouter = require('express').Router();

const {
  Food, Subtype, Type, FoodsIngredient, Ingredient,
} = require('../../db/models');

foodLoadAdminRouter.get('/load', async (req, res) => {
  try {
    const allCards = await Food.findAll({
      raw: true,
      include: [{ model: Subtype }, { model: Type }],
    });
    res.json(allCards);
    // console.log(allCards);
  } catch (err) {
    res.json(err.message);
  }
});

foodLoadAdminRouter.post('/add', async (req, res) => {
  const {
    photo, title, description, weight, new_price, is_vegan, is_spicy,
  } = req.body;
  const newFood = await Food.create({
    photo,
    title,
    description,
    weight,
    new_price,
    is_vegan,
    is_spicy,
  });
  return res.status(201).json(newFood);
});
foodLoadAdminRouter.delete('/del', async (req, res) => {
  const { id } = req.body;
  const delEl = await Food.destroy({
    where: {
      id,
    },
  });
  return res.status(201).json({ id });
});
module.exports = foodLoadAdminRouter;
