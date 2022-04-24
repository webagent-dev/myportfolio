//  get admin
const getAdmin =async  (req,res) => {
        try{
            res.status(200).json('we are getting admin')
    }catch(err){
        res.status(500).json(err)
    }
}
//  update Admin
const updateAdmin =async  (req,res) => {
    try{
              res.status(200).json('we are updating admin')
    }catch(err){
        res.status(500).json(err)
    }
}
//  delete admin

const deleteAdmin =async  (req,res) => {
    try{
              res.status(200).json('we are deleting admin')
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = {
     getAdmin, updateAdmin, deleteAdmin
}