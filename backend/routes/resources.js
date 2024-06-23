const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource.js');


//get paginated resource
router.get('/', async(req,res) => {
    const { page = 1, limit = 10, sortBy = 'name', order = 'asc'} = req.query;

    try{

        const options = {
            page: parseInt(page, 10),
            limit: parseInt(limit, 10),
            sort: { [sortBy]: order === 'asc' ? 1 : -1},
            
        };

        const resources = await Resource.paginate( {}, options);
        res.json(resources);

    } catch(err) {
        res.status(500).json({ message: err.message});
    }
})

//Create a new resource
router.post('/', async(req,res) => {
    try{
        const newResource = new Resource(req.body);
        await newResource.save();

        //Emit an event to all connected clients(websocket)
        req.app.get('socket.io').emit('newResource','New resource created');

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
