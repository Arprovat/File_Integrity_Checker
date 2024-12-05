const mongoose = require('mongoose');
const schema = mongoose.Schema

const fileSchema = new Schema({
    fileName: {
        type: 'string',
        required: true
    } ,
    fileHash:{
        type: 'string',
    }
},{
timestamps: true

});
module.exports = new mongoose.model('File', fileSchema);