const express = require('express')
const router = express.Router()
const    { getAdmin, updateAdmin, deleteAdmin } = require('../controller/update.controller')

router.get('/auth_admin/:id',getAdmin)
router.put('/auth_admin/:id', updateAdmin)
router.delete('/auth_admin/:id', deleteAdmin)



module.exports = router