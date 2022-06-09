const express = require('express')
const Router = express.Router()
const { createAdmin, loginAdmin } = require('../controller/auth.controller')


Router.post('/register_admin', createAdmin)
Router.post('/login_admin', loginAdmin)

module.exports = Router