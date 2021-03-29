const homeController = require('./homeController');
const userController = require('./userController');


const home = homeController
const user = userController
module.exports = {
    home: home,
    user: user
}