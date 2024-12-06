const express = require('express');
const RegisterUserHandler = require('../Controller/Register');
const LoginUserHandler = require('../Controller/Login');
const Router = express.Router()

Router.post('/register',RegisterUserHandler);
Router.post('/login',LoginUserHandler);

module.exports = Router;