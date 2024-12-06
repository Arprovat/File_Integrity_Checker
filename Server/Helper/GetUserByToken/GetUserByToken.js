const User = require('../../model/UserModel/UserModel')
const verifyToken = require('../VerifyToken/VerifyToken')


const GetUserByToken = async(token) =>{
       if(!token) return {
        message:'Token missing',
        logout: true,
       }
    const User_info = verifyToken(token,process.env.SECRET_KEY)


    const user = await User.findOne({email: User_info.payload.email}).select('-password')
   
    return user
    }

    module.exports = GetUserByToken
       
