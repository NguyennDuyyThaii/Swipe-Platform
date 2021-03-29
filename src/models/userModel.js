const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

let Schema = mongoose.Schema

let UserShema = new Schema({
    username: String,
    gender: { type: String, default: null },
    local: {
        email: { type: String, trim: true },
        password: String,
        isActive: { type: Boolean, default: false },
        verifyToken: String
    },
    createdAt: { type: String, default: Date.now },
    updatedAt: { type: String, default: null },
    deletedAt: { type: String, default: null }
})
UserShema.statics = {
    createNew(item) {
        return this.create(item)
    },
    findByEmail(email) {
        return this.findOne({ "local.email": email }).exec()
    },
    removeById(id) {
        return this.findByIdAndRemove(id).exec()
    },
    verify(token) {
        return this.findOneAndUpdate({ "local.verifyToken": token }, { "local.isActive": true, "local.verifyToken": null }).exec()
    },
    findUserById(id) {
        return this.findById(id).exec()
    },
    updatePassword(id, hashPassword) {
        return this.findByIdAndUpdate(id, { "local.password": hashPassword }).exec()
    }
}
UserShema.methods = {
    comparePassword(password) {
        return bcrypt.compare(password, this.local.password)
    }
}
module.exports = mongoose.model("user", UserShema)