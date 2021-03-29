const { user } = require("./../../services/index")
const { validationResult } = require("express-validator")
const { transUpdateUser } = require("./../../../lang/vi")
let updatePassword = async(req, res) => {
    let errorsArr = []
    let validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped)
        errors.forEach(item => {
            errorsArr.push(item.msg)
        })
        return res.status(500).send(errorsArr)
    }
    try {
        let updatePasswordUser = req.body
        await user.updatePassword(req.user._id, updatePasswordUser)
        let result = {
            message: transUpdateUser.user_password
        }
        return res.status(200).send(result)
    } catch (error) {
        return res.status(500).send(error)
    }
}
module.exports = {
    updatePassword: updatePassword
}