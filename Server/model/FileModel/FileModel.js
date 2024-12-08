const mongoose = require('mongoose');
const schema = mongoose.Schema

const fileSchema = new schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    fileName: {
        type: 'string',
        required: true
    } ,
    filePath:{
type: 'string',
    },
    fileHash:{
        type: 'string',
    }
},{
timestamps: true

});
module.exports = new mongoose.model('FileModel', fileSchema);