const path = require("path")
const CreateFileHash = require("../Helper/FileHash/FileHash")
const GetUserByToken = require("../Helper/GetUserByToken/GetUserByToken")
const FileModel = require("../model/FileModel/FileModel")
const fs = require('fs/promises')



const CheckFileIntegrity =async (req, res) => {
try {
    if(!req.file){
        return res.status(400).json({
            message: "file not uploaded yet",
        })   
    }
    const TokenInfo = await GetUserByToken(req.cookie.token)

    const findFile = await FileModel.findOne({
        $and: [
            {User_id:TokenInfo._id},
            {filename: req.file.filename}
        ],
    })
    if(!findFile) return res.status(404).json({
        message: 'File not found',
        error: true,
    })
    const newFileHash = await CreateFileHash(req.File.path)
    const absolutePath = path.join(__dirname, '../../File_store', filePath);
      fs.unlink(absolutePath,(err) => {
        if (err) throw err;
        console.log('path/file.txt was deleted');
      }); 
    if(newFileHash === findFile.fileHash){
        return res.status(200).json({
          message: 'File integrity is ok',
          success: true,
    })
}
  
     return res.status(200).json({
        message: 'file lost integrity',
        success: true,
     })

}
catch (err) {
return res.status(500).json({
    message: err.message ,
    error: true
})
}
}

module.exports = CheckFileIntegrity