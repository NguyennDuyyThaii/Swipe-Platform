const { validationResult } = require("express-validator")
const { register } = require("./../../services/index")
let getRegister = async(req, res) => {
    return res.render("auth/register/register", {
        errors: req.flash("errors"),
        success: req.flash("success")
    })
}
let postRegister = async(req, res) => {
    let errorsArr = []
    let successArr = []
    let validationErrors = validationResult(req)
    if (!validationErrors.isEmpty()) {
        let errors = Object.values(validationErrors.mapped())
        errors.forEach(item => {
            errorsArr.push(item.msg)
        })
        req.flash("errors", errorsArr)
        return res.redirect('/register')
    }
    try {
        let userSuccess = await register.registerUser(req.body.email, req.body.password, req.body.gender, req.protocol, req.get("host"))
        successArr.push(userSuccess)
        req.flash("success", successArr)
        return res.redirect('/login')
    } catch (error) {
        errorsArr.push(error)
        req.flash("errors", errorsArr)
        return res.redirect('/register')
    }
}
let verify = async(req, res) => {
    let errorsArr = []
    let successArr = []
    try {
        let verifySuccess = await register.verifyAccount(req.params.token)
        successArr.push(verifySuccess)
        req.flash("success", successArr)
        return res.redirect('/login')
    } catch (error) {
        errorsArr.push(error)
        req.flash("errors", errorsArr)
        return res.redirect
    }
}
module.exports = {
    getRegister: getRegister,
    postRegister: postRegister,
    verify: verify
}