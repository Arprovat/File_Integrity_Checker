const multer = require('multer');

const Storages =multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'../File_store')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const upload = multer({storage:Storages});
module.exports = upload

