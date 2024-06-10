const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const resourceSchema = new mongoose.Schema({
    name : { type: String, required: true},
    description: { type: String, required: true},
    email: { type: String, required: true},
});

resourceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Resource', resourceSchema);