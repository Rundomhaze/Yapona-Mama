const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// Проверяем залогинен ли юзер для useEffecte в app.js
authRouter.get('/user', async (req, res) => {
  const { user } = res.locals;
  if (user) {
    res.json({
      id: user.id,
      name: user.name,
    });
  } else {
    res.json({ isLoggedIn: false });
  }
});

authRouter.post('/registration', async (req, res) => {
  const {email, password, name, phone} = req.body;

  // проверяем есть ли уже такой пользователь в БД
  const existingUser = await User.findOne({where : { email }})
  if(existingUser) {
    res.status(422).json({ error: 'Такой пользователь уже зарегистрирован' });
    return;
  }

  // создаём нового пользователя
  const user = await User.create({
    email,
    password: await bcrypt.hash(password, 5),
    name,
    phone
  });

  // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
  req.session.userId = user.id;
  res.json({id: user.id, name: user.name});
})

// Logout
authRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({});
  });
});




module.exports = authRouter;
