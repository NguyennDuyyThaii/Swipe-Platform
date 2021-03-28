const session = require("express-session")
const connectMongo = require('connect-mongodb-session')(session)


let sessionStore = new connectMongo({
    url: 'mongodb://localhost:27017/swipe',
    autoReconnect: true
})
let configSession = (app) => {
    app.use(session({
        key: "nguyenduythai",
        secret: "lananh",
        store: sessionStore,
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24
        }
    }))
}

module.exports = {
    configSession: configSession,
    sessionStore: sessionStore
}