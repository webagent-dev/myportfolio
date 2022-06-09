const admin = require('../models/auth.model')
const bcrypt = require('bcrypt')
//  get admin
const getAdmin = async (req, res) => {
    const queryNew = req.query.new
    if (req.user.admin) {
        try {
            const allUser = queryNew ? await admin.find().limit(10) : await admin.find()
            res.status(200).json(allUser)
        } catch (err) {
            res.status(500).json(err.message)
            }
    } else {
        res.status(403).json('you are not allow here')
    }
}
//  update Admin
const updateAdmin =async  (req,res) => {
    if (req.user.admin) {
        if (req.body.password) {
            const salt = await bcrypt.genSalt(10)
            req.body.password = await bcrypt.hash(req.body.password, salt)
        }
         try {
        const user = await admin.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true, runValidators: true })
            } catch (err) {
                res.status(500).json(err.message)
            }
        res.status(200).json(user)
    } else {
        res.status(403).json('you are not allow to access here')
    }
}
//  delete admin

const deleteAdmin =async  (req,res) => {
    if (req.user.admin) {
        try {
        await admin.findByIdAndDelete(req.params.id)
        res.status(200).json('user deleted successfully')
        } catch (err) {
            res.status(500).json(err.message)
        }
    } else {
        res.status(403).json('yiu are not allow to access here')
    }
}


module.exports = {
     getAdmin, updateAdmin, deleteAdmin
}