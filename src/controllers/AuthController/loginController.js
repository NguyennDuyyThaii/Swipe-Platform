const getLogin = (req, res) => {
    return res.render("auth/login/login", {
        errors: req.flash("errors"),
        success: req.flash("success")
    })
}
module.exports = {
    getLogin: getLogin
}