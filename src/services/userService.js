const userModel = require("./../models/userModel")
const bcrypt = require("bcrypt")
const { transUpdateUser } = require("./../../lang/vi")

let saltRound = 7

let updatePassword = (id, updatePassword) => {
    return new Promise(async(resolve, reject) => {
        let currentUser = await userModel.findUserById(id)
        if (!currentUser) {
            return reject(transUpdateUser.account_undefined)
        }
        // đối tương tạo nên phương thức nhé
        let checkCurrentPassword = await currentUser.comparePassword(updatePassword.old_password)
        if (!checkCurrentPassword) {
            return reject(transUpdateUser.old_password_failed)
        }

        let salt = bcrypt.genSaltSync(saltRound)
        await userModel.updatePassword(id, bcrypt.hashSync(updatePassword.new_password, salt))
        resolve(true)
    })
}
module.exports = {
    updatePassword: updatePassword
}