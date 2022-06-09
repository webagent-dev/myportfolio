const admin = require('../models/auth.model')
// resgister admin
const createAdmin =async  (req,res) => {
    try{
        const newUser = await admin.create(req.body)
        res.status(201).json(newUser)
    }catch(err){
        res.status(500).json(err.message)
    }
}
// login user
const loginAdmin =async  (req,res) => {
    try {
        const user = await admin.findOne({ email: req.body.email })
        !user && res.status(401).json('invalid email and password')
        const passCode = await user.comparePassword(req.body.password)
        !passCode && res.status(401).json('invalid email and password')
        const { password, ...other } = user._doc
        const accessToken = user.createToken()
        res.status(200).json({...other, accessToken})
    }catch(err){
        res.status(500).json(err.message)
    }
}


module.exports = { createAdmin, loginAdmin }