const editUserRouter = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User
} = require('../../db/models');

editUserRouter.post('/edit_user_info', async (req, res) => {
  try {
    const {
      id,
      name,
      email,
      phone,
      orderStreet,
      orderHouse,
      orderEntrance,
      orderFloor,
      orderFlat
    } = req.body
    const currPhone = phone.split('').filter((el) => el != '-' && el != '(' && el != ')').join('')
    await User.update({
      name,
      email,
      phone: currPhone,
      orderStreet,
      orderHouse,
      orderEntrance,
      orderFloor,
      orderFlat
    }, {
      where: {id}
    });
    return res.status(201).json({message: "Данные успешно обновлены"})
  } catch (e) {
    res.json(e.message)
  }
})

editUserRouter.post('/edit_user_pass', async (req, res) => {
  try {
    const {id, password, passwordConfirm} = req.body;
    if(password.length < 6) {
      res.status(422).json({
        message: 'Длина пароль должна быть не менее 6 символов'});
      return;
    } else if (password !== passwordConfirm) {
      res.status(422).json({
        message: 'Повторный пароль введен не верно, повторите ввод'})
      return;
    } else {
      await User.update({
        password: await bcrypt.hash(password, 5),
      }, {
        where: {id}
      })
      res.json({message: "Пароль успешно изменен"})
    }
  } catch(e) {
    res.json(e.message)
  }
})

module.exports = editUserRouter;
