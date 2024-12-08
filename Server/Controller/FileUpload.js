const GetUserByToken = require("../Helper/GetUserByToken/GetUserByToken");
const User = require("../model/UserModel/UserModel");
const fileModel = require("../model/FileModel/FileModel");
const FileModel = require("../model/FileModel/FileModel");
const CreateFileHash = require("../Helper/FileHash/FileHash");

const FileUploadhandler =async(req,res)=>{
try {
    if(!req.File){
        return res.status(400).json({
            message: "file not uploaded yet",
        })   
    }
    const tokenInfo = await GetUserByToken(req.cookie.token);
   const user = await User.findById(tokenInfo._id)

 const FileHash = await CreateFileHash(req.file.path)
  const FileData= await FileModel.create({
       User_id: user._id,
       filename: req.File.filename,
       filePath: req.File.path,
       fileHash: FileHash
   })
   User.files.push(FileData._id);
   await user.save();

   return res.status(200).json({
    message:"successfully file uploaded ",
    data: FileData,
   })
    

} catch (error) {
    return res.status(404).json({
        message: "someThings is wrong",
        error: true
    })
}
}
module.exports = FileUploadhandler