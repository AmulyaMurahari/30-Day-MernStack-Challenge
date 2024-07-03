const express = require('express');
const router = express.Router();
const Resource = require('../models/Resource.js');
const { check, validationResult } =  require('express-validator');
const { protect } = require('../middleware/authMiddleware');
const { checkRole } = require('../middleware/roleMiddleware');
const yup = require('yup');

let resources = [
    { id: 1, name: 'Resource 1' },
    { id: 2, name: 'Resource 2' },
  ];

const validateResource = [
    check('name')
      .isString()
      .withMessage('Name must be a string')
      .matches(/^[a-zA-Z\s]*$/)
      .withMessage('Name should contain only letters')
      .notEmpty()
      .withMessage('Name is required'),
    check('description')
      .isString()
      .withMessage('Description must be a string')
      .notEmpty()
      .withMessage('Description is required'),
    check('email')
      .isEmail()
      .withMessage('Invalid email format')
      .notEmpty()
      .withMessage('Email is required'),
  ];

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
// router.post('/', async(req,res) => {
//     try{

//         await resourceSchema.validate(req.body, { abortEarly: false});

//         const newResource = new Resource(req.body);
//         await newResource.save();

//         //Emit an event to all connected clients(websocket)
//         req.app.get('socket.io').emit('newResource','New resource created');

//         res.status(201).json(newResource);
//     } catch (err)
//     {
//         if(err.name === 'Validation Error') {
//             return res.status(400).json({ errors: err.errors });
//         }
//         res.status(500).json({ message: err.message});
//     }
// });

// POST endpoint to create a new resource
router.post(
    '/',
    protect,
    // validateResource,
    checkRole(['admin']),
    [
        //Validate input fields
        check('name', 'Name is required').not().isEmpty(),
        check('description','Description is required').not().isEmpty(),
    ],
    (req, res) => {
      //check for validation errors
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      //create a new Resource
      const newResource = req.body;
      resources.push(newResource);
      res.status(201).json(newResource);
    }
  );

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
