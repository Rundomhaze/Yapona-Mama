const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const cors = require('cors');
const getUser = require('../middlewares/getUser')

// Конфигурация сессии
const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid', 
  secret: process.env.SESSION_SECRET ?? 'G(8x>|Ai^"+&', 
  resave: false, 
  saveUninitialized: false, 
  cookie: {
    maxAge: 1000 * 60 * 60 * 12, 
    httpOnly: true, 
  },
};

function expressConfig(app) {
  app.use(express.static(path.join(__dirname, '../public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.use(getUser);
  app.use(cors({origin:['http://localhost:3000'],credentials:true,}));

}

module.exports = expressConfig;
