const registerService = require("./registerService")
const userService = require("./userService")

let register = registerService
let user = userService
module.exports = {
    register: register,
    user: user
}