const mongoose = require("../db/connection.js")
const uniqueValidator = require('mongoose-unique-validator');

const Ingredient = mongoose.Schema({
    ingredientName: {
        type: String,
        required: [true, 'Please enter ingredient name'],
        unique: true,
        index: true
    },
    effect01: String,
    effect02: String,
    effect03: String,
    effect04: String,
    count: Number
});

Ingredient.plugin(uniqueValidator);
module.exports = mongoose.model("Ingredient", Ingredient);