const Effect = require('../models/Effect');

const effectController = {
    index: function (req, res) {
        Effect.find(req.query)
            .then(effects => {
                res.json({ effects: effects });
            })
            .catch(err => { res.send(err); })
    },
    create: function (req, res) {
        Effect.create(req.body)
            .then(effect => {
                res.json({ effect: effect });
            })
            .catch(err => { res.send(err); })
    },
    read: function (req, res) {
        Effect.findById({ _id: req.params.effectId })
            .then(effect => {
                res.json({ effect: effect });
            })
            .catch(err => { res.send(err); })
    },
    update: function (req, res) {
        Effect.findOneAndUpdate({ _id: req.params.effectId }, req.body, { new: true, useFindAndModify: false, runValidators: true, context: 'query' })
            .then(effect => {
                res.json({ effect: effect });
            })
            .catch(err => { res.send(err); })
    },
    delete: function (req, res) {
        Effect.findOneAndRemove(req.params.effectId, { useFindAndModify: false })
            .then(() => {
                res.json({ message: 'Effect removed' })
            })
            .catch(err => { res.send(err); })
    }
}

module.exports = effectController;