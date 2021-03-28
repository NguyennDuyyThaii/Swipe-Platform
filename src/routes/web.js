const { login, register } = require('./../controllers/AuthController/index')
const { home } = require('./../controllers/SiteController/index')


/**
 * Validation middleware
 */
const { userRegister } = require("./../validations/index")


const express = require("express");
const router = express.Router();

let initRouter = (app) => {
    /**
     * Login-register------------------
     */
    router.get('/login', login.getLogin);
    router.get('/register', register.getRegister);
    router.post('/register', userRegister.userRegister, register.postRegister);
    router.get('/verify/:token', register.verify)
        /**
         * Home------------------
         */
    router.get('/', home.getHome)


    /**
     * return router
     */
    return app.use("/", router);
}
module.exports = initRouter;