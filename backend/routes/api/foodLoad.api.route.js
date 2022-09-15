const foodLoadRouter = require('express').Router();

const {
  Food, Subtype, Type,
} = require('../../db/models');

foodLoadRouter.get('/load/:id', async (req, res) => {
  try {
    const allCards = await Food.findAll({
      raw: true,
      where: {
        type_id: req.params.id,
      },
      include: [{ model: Subtype }, { model: Type }],
    });
    res.json(allCards);
  } catch (err) {
    res.json(err.message);
  }
});

module.exports = foodLoadRouter;
