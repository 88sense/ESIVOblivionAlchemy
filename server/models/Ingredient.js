const mongoose = require("../db/connection.js")
const uniqueValidator = require('mongoose-unique-validator');

const Ingredient = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter ingredient name'],
        unique: true,
        index: true
    },
    effect01: mongoose.Schema.Types.ObjectId,
    effect02: mongoose.Schema.Types.ObjectId,
    effect03: mongoose.Schema.Types.ObjectId,
    effect04: mongoose.Schema.Types.ObjectId,
    count: {
        type: Number,
        default: "0"
    }
});

Ingredient.plugin(uniqueValidator, { message: 'Ingredient Name must be unique.' });
module.exports = mongoose.model("Ingredient", Ingredient);