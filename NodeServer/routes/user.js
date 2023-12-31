const router = require('express').Router()
const User = require('../models/User')

router.route('/').get((req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err))
});

router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+err))
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    const newUser = new User({username, email, password})

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json("Error: "+ err))
})

router.route("/:id").get((req, res) => {
    User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error '+err))
});

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
    .then(user => {
        user.username = req.body.username;
        user.email = req.body.email;
        user.password = req.body.password;

        user.save()
        .then(() => res.json('User Updated'))
        .catch(err => res.status(400).json('Error '+ err))
    })
    .catch(err => res.status(400).json('Error '+ err))
})

module.exports = router;