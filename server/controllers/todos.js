const Todo = require('../models').Todo

module.exports = {
    create(req, res) {
        console.log('hit todo controller')
        return ToDo
        .create({
            title: req.body.title,
        })
        .then(todo => res.status(201).send(todo))
        .catch(err => res.status(400).send(err))
    }
}