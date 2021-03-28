const loginController = require("./loginController");
const registerController = require("./registerController");

const login = loginController;
const register = registerController;
module.exports = {
    login: login,
    register: register
}