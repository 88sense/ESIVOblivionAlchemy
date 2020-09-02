var express = require('express');
var router = express.Router();

const ingredients = require("../controllers/ingredients");

// GET all Ingredients
router.get('/', ingredients.index);

// POST (Create) a Ingredient 
router.post('/', ingredients.create);

// GET a single Ingredient
router.get('/:ingredientId', ingredients.read);

// PUT (Update) a single Ingredient 
router.put('/:ingredientId', ingredients.update);

// Delete a single Ingredient 
router.delete('/:ingredientId', ingredients.delete);

module.exports = router;
