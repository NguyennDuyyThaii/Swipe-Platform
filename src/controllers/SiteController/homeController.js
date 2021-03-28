const { transPassport } = require("./../../../lang/vi")
let getHome = (req, res) => {
    return res.render("site/index", {
        success: req.flash("success")
    })
}
let getLogout = (req, res) => {
    req.logout()
    req.flash("success", transPassport.logout_success)
    return res.redirect('/login')
}

let checkLoggedOut = (req, res, next) => {
    if (req.isAuthenticated()) {
        return res.redirect('/')
    }
    next()
}
let checkloggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        return res.redirect('/login')
    }
    next()
}
module.exports = {
    getHome: getHome,
    getLogout: getLogout,
    checkLoggedOut: checkLoggedOut,
    checkloggedIn: checkloggedIn
}