const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    }
});

const Item = mongoose.model('Authorization', itemSchema);
module.exports = Item;