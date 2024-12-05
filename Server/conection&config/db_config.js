const mongoose = require('mongoose')
require('dotenv').config({path:'env'})

const DB_connection =async () => {
    try {
        const db_Url = process.env.DB_URL

        await mongoose.connect(db_Url)
        console.log('connection established successfully');
        const connection = mongoose.connection;
        connection.on('error', error => {
            console.log('connection error',error)
        })
    } catch (error) {
        console.error(error)
    }
}
module.exports = DB_connection;