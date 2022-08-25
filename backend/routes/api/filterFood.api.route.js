const filterFoodRouter = require('express').Router();

const {Food, Type, sequelize} = require('../../db/models');

filterFoodRouter.get('/filter_food/:item', async(req, res) => {
  try {
    const ingredient = req.params.item
  
    const filteredCards = await Food.findAll({
      raw: true,
      where: {
        description: sequelize.where(sequelize.fn('LOWER', sequelize.col('description')), 'LIKE', `%${ingredient}%`),
      },
      include: [{ model: Type }],
    });

    res.json(filteredCards)
  } catch(err) {
    res.json(err.message);
  }
});


module.exports = filterFoodRouter; 
