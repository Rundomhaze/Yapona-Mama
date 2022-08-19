require('dotenv').config();
const express = require('express');
const { sequelize } = require('./db/models');
const expressConfig = require('./config/express');

// Место под рекваер роутеров:
const apiRouter = require('./routes/api/api.route');
const authRouter = require('./routes/api/api.auth.route');

const app = express();
const PORT = process.env.PORT ?? 4000;
expressConfig(app);

// Подлючаем роутеры app.use(...)
app.use('/auth', authRouter);
app.use('/api', apiRouter);


app.listen(PORT, async () => {
  console.log(`<<< Server started on port ${PORT} >>>`);
  try {
    await sequelize.authenticate();
    console.log('<<<DB connection OK>>>');
  } catch (error) {
    console.log(error.message);
  }
});
