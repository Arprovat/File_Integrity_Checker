const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const Router = require('./Router/Router')
require('dotenv').config()
const DB_connection = require('./conection&config/db_config.js')

const port = 8000
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use('/api',Router);

app.get('/',(req,res)=>{
    res.send('Welcome')
})

DB_connection().then(()=>{
    app.listen(port,()=>{
        console.log('listening on port',port);
    })
})