const { json } = require('body-parser')
const express = require('express')
const router = express.Router()
const studentModel = require('../model/model')

//get all the value from database
router.get('/',async (req,res)=>{
    try{

        const student = await studentModel.find()
        res.json(student)
    }
    catch(err){
        res.json({message:'error occured during getting value form database'})
    }
    
})
//post all the data to database
router.post('/',async (req,res)=>{
    const newStudent = new studentModel({
        name:req.body.name,
        identity:req.body.identity,
        depart:req.body.depart
    }) 
    try {
        const savedStudent = await newStudent.save()
        res.json(savedStudent)
    } catch (error) {
        res.json({message:'error occured during post all the data to database'})
    }
})

//get by specific id
router.get('/:id',async (req,res)=>{
    try {
        const specificStudent = await studentModel.findById(req.params.id)
        res.json(specificStudent)
    } catch (error) {
        res.json({message:'error occured during getting specific value form database'})
    }
})

//delete data
router.delete('/:id',async (req,res)=>{
    try{
        const deletedData = await studentModel.remove({_id:req.params.id})
        res.json(deletedData)
    }
    catch(error){
        res.json({message:'error occured during delettion time'})
    }
})
//update
router.patch('/:id',async (req,res)=>{
    try {
        const updatedData = await studentModel.update({_id:req.params.id},
            {$set:{
                name:req.body.name,
                identity:req.body.identity,
                depart:req.body.depart
            }})
        res.json(updatedData)
    } catch (error) {
        res.json({message:'an error occured during updating time'})
    }
})




module.exports = router