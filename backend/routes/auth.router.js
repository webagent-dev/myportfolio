const express = require('express')
const router = express.Router()
const { createAdmin, loginAdmin } = require('../controller/auth.controller')


router.post('/register_admin', createAdmin)
router.post('/login_admin', loginAdmin)

module.exports = router