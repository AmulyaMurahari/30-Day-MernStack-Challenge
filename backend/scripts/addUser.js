// backend/scripts/addUser.js
const mongoose = require('mongoose');
const User = require('../models/User');
require('dotenv').config();

const uri = 'mongodb+srv://amulyamurahari:Amulya1997@cluster.ynbj1kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const createUser = async () => {
    const username = 'example_user';
    const password = '123456'; // Change this to a secure password

    try {
        const userExists = await User.findOne({ username });

        if (userExists) {
            console.log('User already exists');
            return;
        }

        const user = new User({ username, password });
        await user.save();
        console.log('User created:', user);
    } catch (err) {
        console.error('Error creating user:', err);
    } finally {
        mongoose.connection.close();
    }
};

createUser();
