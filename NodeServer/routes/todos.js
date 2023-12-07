const router = require('express').Router()
const Todo = require('../models/Todo')

router.route('/').get((req, res) => {
    Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.status(400).json('Error ' + err))
});

router.route('/add').post((req, res) => {
    const userId = req.body.userId;
    const title = req.body.title;
    const description = req.body.description;
    const date = Date.parse(req.body.date);

    const newtodo = new Todo({userId, title, description, date})

    newtodo.save()
    .then(() => res.json('Todo added'))
    .catch(err => res.status(400).json("Error: "+ err))

    router.route("/:id").get((req, res) => {
        Todo.findById(req.params.id)
        .then(todo => res.json(todo))
        .catch(err => res.status(400).json('Error '+err))
    });

    router.route('/:id').delete((req, res) => {
        Todo.findByIdAndDelete(req.params.id)
        .then(() => res.json('Todo Deleted'))
        .catch(err => res.status(400).json('Error '+ err))
    })

    router.route('/update/:id').post((req, res) => {
        Todo.findById(req.params.id)
        .then(todo => {
            todo.userId = req.body.userId;
            todo.title = req.body.title;
            todo.description = req.body.description;
            todo.date = Date.parse(req.body.date);
            todo.completed = req.body.completed;

            todo.save()
            .then(() => res.json('Todo Updated'))
            .catch(err => res.status(400).json('Error '+ err))
        })
        .catch(err => res.status(400).json('Error '+ err))
    })



})
module.exports = router;