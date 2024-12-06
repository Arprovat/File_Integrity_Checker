const GetUserByToken = require("../Helper/GetUserByToken/GetUserByToken")
const verifyToken = require("../Helper/VerifyToken/VerifyToken")

const User_Details = async(req, res) => {

try {
    const token = req.cookies.token

    const verificationResult = await GetUserByToken(token)
    return res.json({
        data:verificationResult
    })
} catch (error) {
   return res.status(404).json({message: error.message}) 
}

}

module.exports = User_Details