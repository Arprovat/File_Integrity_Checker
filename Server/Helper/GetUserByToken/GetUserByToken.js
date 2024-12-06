const User = require('../../model/UserModel/UserModel')


const GetUserByToken = async(token) =>{
       if(!token) return {
        message:'Token missing',
        logout: true,
       }
    const User_info = verifyUser(token)
    const user = await User.findOne({email: User_info.email})
    return user
    }

    module.exports = GetUserByToken
       
