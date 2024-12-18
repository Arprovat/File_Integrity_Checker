const createJWT = require('../Helper/Signature/Signature');
const User = require('../model/UserModel/UserModel');
const bcrypt = require('bcrypt');

const LoginUserHandler = async (req, res) =>{
try {
    const { email, password} = req.body

const user = await User.findOne({email})
if(!user){
    return res.status(403).json({
        message:'User not found',
        error: true
    });
}

const VerifyPassword = await bcrypt.compare(password,user.password)

if(!VerifyPassword){
    return res.status(400).json({
        message: 'Invalid password',
        error : true,
    })
}
const payload ={
    User_id: user._id,
    email: user.email,

}

const token = createJWT(payload,process.env.SECRET_KEY)
console.log(token)

const cookieOptions ={
    httpOnly :true,
    secure:true,
}
  return res.cookie("token",token,cookieOptions).status(200).json({
    message: 'login successful',
    token:token,
    success:true
  })
} catch (error) {
    return res.status(404).json({
        message: 'login failed',
        error: error,
    })
}
}

module.exports = LoginUserHandler