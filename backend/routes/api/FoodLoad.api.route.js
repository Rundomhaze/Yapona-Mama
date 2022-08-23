const foodLoadRouter = require('express').Router();

const {
  Food, Subtype, Type, FoodsIngredient, Ingredient,
} = require('../../db/models');

foodLoadRouter.get('/load', async (req, res) => {
  try {
    const allCards = await Food.findAll({
      raw: true,
      // where: {
      //   type_id: 1,
      // },
      include: [{ model: Subtype }, { model: Type }],
    });
    res.json(allCards);
    console.log(allCards);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = foodLoadRouter;
