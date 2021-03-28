const { check } = require("express-validator")
const { transUserLoginRegister } = require("./../../lang/vi")
let userRegister = [
    check("email", transUserLoginRegister.email_empty).not().isEmpty(),
    check("email", transUserLoginRegister.email_incorect).isEmail().trim(),
    check("password", transUserLoginRegister.password_empty).not().isEmpty(),
    check("password", transUserLoginRegister.password_incorect)
    .isLength({ min: 8 })
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/),
    check("re_password", transUserLoginRegister.re_password_incorect)
    .custom((value, { req }) => {
        return value === req.body.password
    }),
    check("gender", transUserLoginRegister.gender_incorect).isIn(["male", "female"]),
    check("gender", transUserLoginRegister.gender_incorect).not().isEmpty()
];

module.exports = {
    userRegister: userRegister
}