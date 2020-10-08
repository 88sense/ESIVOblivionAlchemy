const mongoose = require("../db/connection.js")
const uniqueValidator = require('mongoose-unique-validator');

const Effect = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter effect name'],
        unique: true,
        index: true
    }
})

Effect.plugin(uniqueValidator, { message: 'Effect Name must be unique.' });

module.exports = mongoose.model("Effect", Effect);