const express = require('express');
const RegisterUserHandler = require('../Controller/Register');
const LoginUserHandler = require('../Controller/Login');
const User_Details = require('../Controller/UserDetails');
const FileUploadhandler = require('../Controller/FileUpload');
const upload = require('../conection&config/multer');
const CheckFileIntegrity = require('../Controller/CheckFileIntegrity');
const ViewAllFileHandler = require('../Controller/ViewAllFile');
const Router = express.Router()

Router.post('/register',RegisterUserHandler);
Router.post('/login',LoginUserHandler);
Router.get('/user_Details',User_Details);
Router.post('/fileUpload',upload.single('File'),FileUploadhandler);
Router.post('/checkFileIntegrity',CheckFileIntegrity);
Router.get('/ViewAllFiles',ViewAllFileHandler);

module.exports = Router;