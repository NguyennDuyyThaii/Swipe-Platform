const configViewEngine = require("./configs/viewEngine");
const initRouter = require("./routes/web");
const connectDB = require("./configs/connectDB");
const session = require("./configs/session")
const connectFlash = require("connect-flash")
const bodyParser = require("body-parser")
const passport = require("passport");
const express = require("express");
const app = express();
/**
 * connect DB
 */
connectDB();
/**
 * session
 */
session.configSession(app);
/**
 * view engine ejs extend
 */
configViewEngine(app);
/**
 * config body-parser
 */

app.use(bodyParser.urlencoded({ extend: true }))
    /**
     * passport
     */
app.use(passport.initialize());
app.use(passport.session());
/**
 * connect-flash
 */
app.use(connectFlash())
    /**
     * routes
     */
initRouter(app);

/**
 *
 * listen server
 */
app.listen(process.env.APP_PORT, () => {
    console.log(`server is working on port ${process.env.APP_PORT}`);
})