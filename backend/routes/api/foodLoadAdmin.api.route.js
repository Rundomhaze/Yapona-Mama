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
    const types = await Type.findAll({
      raw: true,
    });
    res.json({ allCards, types });
    // console.log(allCards);
  } catch (err) {
    res.json(err.message);
  }
});

foodLoadAdminRouter.post('/add', async (req, res) => {
  try {
    const {
      photo, title, description, weight, new_price, is_vegan, is_spicy, typetitle, subtypetitle,
    } = req.body;
    const typeid = await Type.findOne({
      where: {
        title: typetitle,
      },
    });
    const subtypeid = await Subtype.findOne({
      where: {
        title: subtypetitle,
      },
    });
    const newFood = await Food.create({
      photo,
      title,
      description,
      weight,
      new_price,
      is_vegan,
      is_spicy,
      type_id: typeid.id,
      subtype_id: subtypeid.id,
    });
    const addedFood = await Food.findOne({
      where: {
        id: newFood.id,
      },
      raw: true,
      include: [{ model: Subtype }, { model: Type }],
    });
    return res.status(201).json(addedFood);
  } catch (err) {
    res.json(err.message);
  }
});
foodLoadAdminRouter.delete('/del', async (req, res) => {
  try {
    const { id } = req.body;
    const delEl = await Food.destroy({
      where: {
        id,
      },
    });
    return res.status(201).json({ id });
  } catch (err) {
    res.json(err.message);
  }
});
module.exports = foodLoadAdminRouter;
