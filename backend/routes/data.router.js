const express = require('express')
const router = express.Router()
const { createData, getAllData, getSingleData, updateData, deleteData } = require('../controller/data.controller')

router.route('/data').get(getAllData).post(createData)
router.route('/data/:id').get(getSingleData).put(updateData).delete(deleteData)


module.exports = router;