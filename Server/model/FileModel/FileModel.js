const mongoose = require('mongoose');
const schema = mongoose.Schema

const fileSchema = new schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fileDetails: {
       name:{
        type: String,
        required: true,
        default: '',
       },
       size:{
        type: Number,
        required: true,
       },
       _type: {
        type: String,
        default: '',
       }
    } ,
    
    fileHash:{
        type: String,
    }
},{
timestamps: true

});
module.exports = new mongoose.model('FileModel', fileSchema);