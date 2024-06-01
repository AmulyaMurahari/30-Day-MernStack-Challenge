const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    name : { type: String, required: true},
    description: String,
});

module.exports = mongoose.model('Resource', resourceSchema);