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

// Login
authRouter.post('/login', async(req, res) => {
  const {phone, password} = req.body;
  const existingUser = await User.findOne({ where: { phone } });

  // проверяем, что такой пользователь есть в БД и пароли совпадают
  if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
  // кладём id нового пользователя в хранилище сессии (логиним пользователя)
    req.session.userId = existingUser.id;
    req.session.user = existingUser;
    res.json({ id: existingUser.id, name: existingUser.name });
  } else {
    res.status(401).json({ error: 'Такого пользователя нет либо пароли не совпадают' });
  }
})

// Logout
authRouter.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.clearCookie('user_sid');
    res.json({});
  });
});


module.exports = authRouter;
