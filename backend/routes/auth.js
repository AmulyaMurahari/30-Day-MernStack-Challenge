const express = require('express');
const router = express.Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

//register a new user

router.post('/register', async(req,res) => {
    const{ username, password } = req.body;

    try{
        const userExits = await User.findOne({ username });

        if(userExits) {
            return res.status(400).json({ message: 'User already exists'});
        }

        const user = await User.create({ username, password });

        if(user) {
            res.status(201).json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id),
            });
        } else{
              res.status(400).json({ message: 'Invalid user data'});
        }

    } catch(err){
        res.status(500).json({message: err.message});
    }
});

//login a user

router.post('/login', async(req, res) => {
    const {username, password} = req.body;

    try{
        const user = await User.findOne({ username });

        if(user && (await user.matchPassword(password))) {
            res.json({
                _id: user._id,
                username: user.username,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password '});
        }

    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;