const Ingredient = require('../models/Ingredient');

const ingredientController = {
    index: function (req, res) {
        Ingredient.find(req.query)
            .then(ingredients => {
                res.json({ ingredients: ingredients });
            })
            .catch(err => { res.send(err); })
    },
    create: function (req, res) {
        Ingredient.create(req.body)
            .then(ingredient => {
                res.json({ ingredient: ingredient });
            })
            .catch(err => { res.json(err); })
    },
    read: function (req, res) {
        Ingredient.findById({ _id: req.params.ingredientId })
            .then(ingredient => {
                res.json({ ingredient: ingredient });
            })
            .catch(err => { res.send(err); })
    },
    update: function (req, res) {
        Ingredient.findOneAndUpdate({ _id: req.params.ingredientId }, req.body, { new: true, useFindAndModify: false, runValidators: true, context: 'query' })
            .then(ingredient => {
                res.json({ ingredient: ingredient });
            })

    },
    updatebyName: function (req, res) {
        Ingredient.findOneAndUpdate({ name: req.params.ingredientName }, req.body, { new: true, useFindAndModify: false, runValidators: true, context: 'query' })
            .then(ingredient => {
                res.json({ ingredient: ingredient });
            })
            .catch(err => { res.send(err); })
    },
    delete: function (req, res) {
        Ingredient.findOneAndRemove({ _id: req.params.ingredientId }, { useFindAndModify: false })
            .then(ingredient => {
                res.json({ ingredient: ingredient })
            })
            .catch(err => { res.send(err); })
    }
}

module.exports = ingredientController;