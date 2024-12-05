const express = require('express');
const RegisterUserHandler = require('../Controller/Register');
const Router = express.Router()

Router.post('/register',RegisterUserHandler);

module.exports = Router;