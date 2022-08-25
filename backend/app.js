require('dotenv').config();
const express = require('express');
const { sequelize } = require('./db/models');
const expressConfig = require('./config/express');

// Место под рекваер роутеров:
const apiRouter = require('./routes/api/api.route');
const foodLoadRouter = require('./routes/api/foodLoad.api.route');
const foodLoadAdminRouter = require('./routes/api/foodLoadAdmin.api.route');
const authRouter = require('./routes/api/api.auth.route');
const hitRouter = require('./routes/api/Hit.api.route');
const editUserRouter = require('./routes/api/api.editUser.route');
const filterFoodRouter = require('./routes/api/filterFood.api.route');
const filterChiliVeganFoodRouter = require('./routes/api/filterChiliVeganFood.router');


const app = express();
const PORT = process.env.PORT ?? 4000;
expressConfig(app);

// Подлючаем роутеры app.use(...)
app.use('/auth', authRouter);
app.use('/api', apiRouter);
app.use('/api', foodLoadRouter);
app.use('/api', foodLoadAdminRouter);
app.use('/api', hitRouter);
app.use('/api', editUserRouter);
app.use('/ingredients', filterFoodRouter);
app.use('/fil', filterChiliVeganFoodRouter);


app.listen(PORT, async () => {
  console.log(`<<< Server started on port ${PORT} >>>`);
  try {
    await sequelize.authenticate();
    console.log('<<<DB connection OK>>>');
  } catch (error) {
    console.log(error.message);
  }
});
