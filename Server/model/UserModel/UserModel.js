const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({

    Username:{
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true,

    },
    password: {
        type: 'string',
        required: true,
    },
    profile_Photo:{
        type: 'string'
    },
    files:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'FileModel',
        }
    ]
},{
    timestamps: true
});
module.exports = new mongoose.model('User',UserSchema);