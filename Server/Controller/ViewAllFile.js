const GetUserByToken = require("../Helper/GetUserByToken/GetUserByToken");
const UserModel = require("../model/UserModel/UserModel");

const ViewAllFileHandler = async (req, res) => {

    try {
        const tokenInfo = await GetUserByToken(req.cookies.token);
        const userFile = await UserModel.findById(tokenInfo._id)
            .populate('files');

        return res.status(200).json({
            message: 'success retrieving all files',
            data: userFile.files,
            success: true,
        })
    } catch (error) {
        return res.status(404).json({
            message: error.message,
            error: true,
        })

    }


}
module.exports = ViewAllFileHandler
