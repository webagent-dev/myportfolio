const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
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

module.exports = mongoose.model('admin', authSchema)