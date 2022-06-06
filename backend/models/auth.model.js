const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const authSchema = new mongoose.Schema({
    name: { type: 'string', require: true, unique:true},
    email: { type: 'string', require: true, unique:true},
    isAdmin: {type: Boolean, default: false},
    password: { type: 'string', require: true, unique:true},
})


authSchema.pre('save', async () => {
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

authSchema.methods.createToken = function () {
    return jwt.sign(
        { id: this._id, admin: this.isAdmin },
        process.env.SECRET_KEY,
    {expiration: process.env.LOST})
}
module.exports = mongoose.model('admin', authSchema)