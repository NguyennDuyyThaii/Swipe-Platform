const userModel = require("./../models/userModel")
const bcrypt = require("bcrypt")
const { transUserLoginRegister, Registermailer } = require("./../../lang/vi")
const { v4: uuid } = require("uuid")
const sendMail = require("./../configs/mailer")

let saltRound = 7
let registerUser = (email, password, gender, protocol, host) => {
    return new Promise(async(resolve, reject) => {
        // kiem tra xem email ton tai hay chua
        let userByEmail = await userModel.findByEmail(email)
        if (userByEmail) {
            if (!userByEmail.local.isActive) {
                return reject(transUserLoginRegister.account_not_active)
            }
            if (userByEmail.deletedAt != null) {
                return reject(transUserLoginRegister.account_removed)
            }
            return reject(transUserLoginRegister.email_in_use)
        }
        let salt = bcrypt.genSaltSync(saltRound)
        let item = {
            username: email.split("@")[0],
            gender: gender,
            local: {
                email: email,
                password: bcrypt.hashSync(password, salt),
                verifyToken: uuid()
            }
        }

        let user = await userModel.createNew(item)
        let linkVerify = `${protocol}://${host}/verify/${user.local.verifyToken}`
        sendMail(email, Registermailer.subject, Registermailer.template(linkVerify))
            .then(() => {
                resolve(transUserLoginRegister.userCreated(user.local.email))
            })
            .catch(async(error) => {
                await userModel.removeById(user._id)
                reject(Registermailer.send_faild)
            })
    })
}

/**
 * verify account
 */
let verifyAccount = (token) => {
    return new Promise(async(resolve, reject) => {
        await userModel.verify(token)
        resolve(Registermailer.account_actived)
    })
}
module.exports = {
    registerUser: registerUser,
    verifyAccount: verifyAccount
}