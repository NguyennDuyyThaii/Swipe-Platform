const { login, register } = require('./../controllers/AuthController/index')
const { home, user } = require('./../controllers/SiteController/index')
const initPassportLocal = require("./../controllers/PassportController/local")

/**
 * Validation middleware
 */
const { userRegister } = require("./../validations/index")


const express = require("express");
const router = express.Router();
const passport = require("passport");

initPassportLocal()

let initRouter = (app) => {
    /**
     * Login-register------------------
     */
    router.get('/login', home.checkLoggedOut, login.getLogin);
    router.get('/register', home.checkLoggedOut, register.getRegister);
    router.post('/register', home.checkLoggedOut, userRegister.userRegister, register.postRegister);
    router.get('/verify/:token', home.checkLoggedOut, register.verify)
    router.post('/login', home.checkLoggedOut, passport.authenticate("local", {
            successRedirect: "/",
            failureRedirect: "/login",
            successFlash: true,
            failureFlash: true
        }))
        /**
         * Home------------------
         */
    router.get('/logout', home.checkloggedIn, home.getLogout)
    router.get('/', home.checkloggedIn, home.getHome)
    router.put('/user/update-password', home.checkloggedIn, user.updatePassword)


    /**
     * return router
     */
    return app.use("/", router);
}
module.exports = initRouter;