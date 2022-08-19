const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../db/models');



authRouter.route('/registration')

authRouter.route('/login')

authRouter.route('/logout')




module.exports = authRouter;
