const express = require('express')
const router = express.Router()
const { getAdmin, updateAdmin, deleteAdmin } = require('../controller/update.controller')
const verifyToken = require('../middleware/verifyToken')

router.get('/get/:id', verifyToken, getAdmin)
router.put('/get/:id', verifyToken, updateAdmin)
router.delete('/get/:id', verifyToken, deleteAdmin)


module.exports = router