const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource.js');

//Create a new resource
router.post('/', async(req,res) => {
    try{
        const newResource = new Resource(req.body);
        await newResource.save();
        res.status(201).json(newResource);
    } catch (err)
    {
        res.status(400).json({ message: err.message});
    }
});

//Retrieve a new resource
router.get('/:id', async(req,res) => {
    try{
        const resource = await Resource.findById(req.params.id);
        if(resource) {
            res.json(resource);
        } else {
            res.status(400).json({message:'Resource not found'});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

//Update a resource
router.put('/:id', async(req,res) => {
    try{
        const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, { new:true, runValidators: true});
        if(resource) {
            res.json(resource);
        } else {
            res.status(400).json({message:'Resource not found'});
        }
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

//Delete a resource

router.delete('/:id', async(req,res) => {
    try{
        const resource = await Resource.findByIdAndDelete(req.params.id);
        if(resource){
            res.json(resource);
        } else {
            res.status(400).json({message: 'Resource not found'});
        } 
    } catch(err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;
