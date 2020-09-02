var express = require('express');
var router = express.Router();

const effects = require("../controllers/effects");

// GET all Effects
router.get('/', effects.index);

// POST (Create) a Effect 
router.post('/', effects.create);

// GET a single Effect
router.get('/:effectId', effects.read);

// PUT (Update) a single Effect 
router.put('/:effectId', effects.update);

// Delete a single Effect 
router.delete('/:effectId', effects.delete);

module.exports = router;
