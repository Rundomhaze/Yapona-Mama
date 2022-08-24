const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');

// Проверяем залогинен ли юзер для useEffecte в app.js
authRouter.get('/user', async (req, res) => {
  try {
    const { user } = res.locals;
    if (user) {
      res.json({
        auth: true,
        message: null,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          orderPhone: user.orderPhone,
          orderStreet: user.orderStreet,
          orderHouse: user.orderHouse,
          orderEntrance: user.orderEntrance,
          orderFloor: user.orderFloor,
          orderFlat: user.orderFlat
        }
      });
    } else {
      res.json({
        auth: false, 
        message: 'Зарегистрируйтесь или войдите в аккаунт'});
    }
  } catch (e) {
    res.json({message: "Нет доступа к базе данных"})
  }
});

// Registration
authRouter.post('/registration', async (req, res) => {
  try {
    const { email, password, passwordConfirm, name, phone } = req.body;
    const currPhone = phone.split('').filter((el) => el != '-' && el != '(' && el != ')').join('')
    // проверяем есть ли уже такой пользователь в БД
    const existingUserEmail = await User.findOne( {where: { email }} );
    const existingUserPhone = await User.findOne( {where: { phone:  currPhone}} )
    if (existingUserEmail || existingUserPhone) {
      res.status(422).json({
        auth: false, 
        message: 'Такой пользователь уже зарегистрирован, введите другой email и телефон'});
      return;
    } else if (password.length < 6) {
      res.status(422).json({
        auth: false, 
        message: 'Длина пароль должна быть не менее 6 символов'});
      return;
     } else if (password !== passwordConfirm) {
      res.status(422).json({
        auth: false, 
        message: 'Повторный пароль введен не верно, повторите ввод'})
      return;
    } else {
      // создаём нового пользователя
      const user = await User.create({
        email,
        password: await bcrypt.hash(password, 5),
        name,
        phone: currPhone
      });
      // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
      req.session.userId = user.id;
      res.json({
        auth: true,
        message: 'Зарегистрируйтесь или войдите в аккаунт',
        user: {
          id: user.id,
          name: user.name
        }
      }); 
    }
  } catch (e) {
    res.json({message: "Нет доступа к базе данных"})
  }
})

// Login
authRouter.post('/login', async (req, res) => {
  try {
    const { phone, password } = req.body;
    const currPhone = phone.split('').filter((el) => el != '-' && el != '(' && el != ')').join('')
    const existingUser = await User.findOne({ where: { phone: currPhone } });
    if(!existingUser || !(await bcrypt.compare(password, existingUser.password))) {
      res.status(422).json({
        auth: false, 
        message: 'Пользователь с таким номером не зарегистрирован, либо пароли не совпадают'});
    } else {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.userId = existingUser.id;
      req.session.user = existingUser;
      res.json({
        auth: true,
        message: 'Зарегистрируйтесь или войдите в аккаунт',
        user: {
          id: existingUser.id,
          name: existingUser.name
        }
      });
    }
  } catch (e) {
    res.json({ message: "Нет доступа к базе данных"})
  }
})

// Logout
authRouter.post('/logout', (req, res) => {
  try {
    req.session.destroy(() => {
      res.clearCookie('user_sid');
      res.json({});
    });
  } catch(e) {
    res.json({
      message: "Нет доступа к базе данных"
    })
  }
});

module.exports = authRouter;
