const admin = require('../models/auth.model')
// resgister admin
const createAdmin =async  (req,res) => {
    try{
        const newUser = await admin.create(req.body)
        res.status(201).json(newUser)
    }catch(err){
        res.status(500).json(err)
    }
}
// login user
const loginAdmin =async  (req,res) => {
    try{
                    res.status(200).json('we are loggin  admin')
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
    createAdmin, loginAdmin
}