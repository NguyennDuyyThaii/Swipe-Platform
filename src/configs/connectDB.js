const mongoose = require("mongoose");
const bluebird = require("bluebird");

let connectDB = () => {
    mongoose.Promise = bluebird;
    let URI = "mongodb://localhost:27017/swipe"
    return mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
}

module.exports = connectDB;