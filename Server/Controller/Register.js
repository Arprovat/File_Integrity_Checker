const User = require('../model/UserModel/UserModel')
const bcrypt = require('bcrypt')

const  RegisterUserHandler = async(req, res)=>{
const {Username,email,password,profile_photo} = req.body;

if(!Username ||!email || !password){
   return res.status(403).json({message:"Doesn't provide username or email"});
}
const user =await User.findOne({email})
if(user){
return res.status(400).json({message:"Already registered"});
}
const saltRound =10;
const HashPassword = await bcrypt.hash(password, saltRound)

const payload ={
    Username,
    email,
    password:HashPassword,
    profile_photo
}

const UserRegister= new User(payload)
const result =  await UserRegister.save();
 return res.status(200).json({
    message:"registered successfully",
    data: result,
    success: true

})
}
module.exports = RegisterUserHandler