const express = require('express');
const RegisterUserHandler = require('../Controller/Register');
const LoginUserHandler = require('../Controller/Login');
const User_Details = require('../Controller/UserDetails');
const FileUploadhandler = require('../Controller/FileUpload');
const upload = require('../conection&config/multer');
const Router = express.Router()

Router.post('/register',RegisterUserHandler);
Router.post('/login',LoginUserHandler);
Router.get('/user_Details',User_Details);
Router.post('/fileUpload',upload.single('File'),FileUploadhandler);

module.exports = Router;