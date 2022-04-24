const express = require('express')
const router = express.Router()
const { createData, getAllData, getSingleData, updateData, deleteData } = require('../controller/data.controller')

router.get('/data', getAllData)
router.post('/data', createData)
router.get('/data/:id', getSingleData)
router.put('/data/:id', updateData)
router.delete('/data/:id', deleteData)


module.exports = router;