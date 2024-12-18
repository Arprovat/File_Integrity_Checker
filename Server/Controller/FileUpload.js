const GetUserByToken = require("../Helper/GetUserByToken/GetUserByToken");
const User = require("../model/UserModel/UserModel");
const FileModel = require("../model/FileModel/FileModel");
const CreateFileHash = require("../Helper/FileHash/FileHash");

const FileUploadhandler =async(req,res)=>{
try {
    console.log(req.file)
    if(!req.file){
        return res.status(400).json({
            message: "file not uploaded yet",
        })   
    }
    console.log(req.cookies.token)
    const tokenInfo = await GetUserByToken(req.cookies.token);
    console.log('token info',tokenInfo)
  
 const FileHash = await CreateFileHash(req.file.filename)
  const FileData= await FileModel.create({
       User_id: tokenInfo._id,
       fileDetails:{
        name:req.file.filename,
        size: req.file.size,
        type: req.file.mimetype
       } ,
       fileHash: FileHash
   })
   console.log('file',FileData)
   
   await User.findByIdAndUpdate(tokenInfo._id, { $push: { files: FileData._id } });

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