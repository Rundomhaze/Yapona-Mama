const hitRouter = require('express').Router();

const {
  Food, Subtype, Type
} = require('../../db/models');

hitRouter.get('/hits', async (req, res) => {
  try {
    const allHits = await Food.findAll({
      raw: true,
      where: {
        is_hit: true
      },
      include: [{ model: Subtype }, { model: Type }],
    })
    res.json(allHits);
  } catch (err) {
    res.json(err.message);
  }
})


module.exports = hitRouter
