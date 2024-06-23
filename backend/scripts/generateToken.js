// backend/scripts/generateToken.js
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = require('../models/User');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
require('dotenv').config();

console.log('ENV Variable', process.env);

const JWT_SECRET = process.env.JWT_SECRET;
const uri = 'mongodb+srv://amulyamurahari:Amulya1997@cluster.ynbj1kk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster';

if (!JWT_SECRET) {
    console.error('JWT_SECRET is not defined in the environment variables');
    process.exit(1);
}

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

const generateTokenForUser = async (username) => {
    try {
        const user = await User.findOne({ username });

        if (!user) {
            console.log('User not found');
            return;
        }

        const payload = {
            id: user._id,
            username: user.username
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        console.log('Generated JWT Token:', token);
    } catch (err) {
        console.error('Error generating token:', err);
    } finally {
        mongoose.connection.close();
    }
};

// Replace 'example_user' with the actual username you want to generate a token for
generateTokenForUser('example_user');
