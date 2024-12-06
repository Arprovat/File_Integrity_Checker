const express = require('express');
const RegisterUserHandler = require('../Controller/Register');
const LoginUserHandler = require('../Controller/Login');
const User_Details = require('../Controller/UserDetails');
const Router = express.Router()

Router.post('/register',RegisterUserHandler);
Router.post('/login',LoginUserHandler);
Router.get('/user_Details',User_Details);

module.exports = Router;