const mongoose = require("../db/connection.js")
const uniqueValidator = require('mongoose-unique-validator');

const Effect = mongoose.Schema({
    effectName: {
        type: String,
        required: [true, 'Please enter effect name'],
        unique: true,
        index: true
    }
})

Effect.plugin(uniqueValidator);

module.exports = mongoose.model("Effect", Effect);