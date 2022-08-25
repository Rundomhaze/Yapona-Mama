const filterChiliVeganFoodRouter = require('express').Router();

const {
  Food, Type,
} = require('../../db/models');


filterChiliVeganFoodRouter.get('/filter_chili_vegan_food/:type', async(req, res) => {
  try {
    const typeFood = req.params.type

    if (typeFood === 'chili') {
      const chiliFood = await Food.findAll({
        raw: true,
        where: {
          is_spicy: true
        },
        include: [{ model: Type }],
      })
 
      res.json(chiliFood)
    } else if (typeFood === 'vegan') {
      const veganFood = await Food.findAll({
        raw: true,
        where: {
          is_vegan: true
        },
        include: [{ model: Type }],
      })

      res.json(veganFood)
    }

  } catch(err) {
    res.json(err.message);
  }
})

module.exports = filterChiliVeganFoodRouter;
