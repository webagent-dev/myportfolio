const Project = require('../models/data.model')

//  create data 
const createData = async (req,res) => {
    try{
        res.status(201).json('we are creating data')
    }catch(err){
        console.log(err)
    }
}

//  get all  data 
const getAllData = async (req,res) => {
    try{
        res.status(201).json('we are getting all data')
    }catch(err){
        console.log(err)
    }
}

//  get Single data 
const getSingleData = async (req,res) => {
    try{
        res.status(201).json('we are getting single  data')
    }catch(err){
        console.log(err)
    }
}
//  updating data data 
const updateData = async (req,res) => {
    try{
        res.status(201).json('we are updating data')
    }catch(err){
        console.log(err)
    }
}
//  delete data 
const deleteData = async (req,res) => {
    try{
        res.status(201).json('we are deleting  data')
    }catch(err){
        console.log(err)
    }
}

module.exports = {
    createData, getAllData, getSingleData, updateData, deleteData
}