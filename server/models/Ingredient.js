const mongoose = require("../db/connection.js")
const uniqueValidator = require('mongoose-unique-validator');

const Ingredient = mongoose.Schema({
    effect01: String,
    effect02: String,
    effect03: String,
    effect04: String,
});

Ingredient.plugin(uniqueValidator);
module.exports = mongoose.model("Ingredient", Ingredient);