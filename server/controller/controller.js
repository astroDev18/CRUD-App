var Userdb = require('../model/model');

// Create and save new user
exports.create = (req, res) => {
    // Validate Request
    if (!req.body) {
        res.status(400).send({message: "Message content can't be empty!"})
    }

    // New User
    const user = new Userdb ({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // Save user in the DataBase
    user
        .save(user)
        .then(data => {
        res.send(data)
    })
        .catch(err => {
            res.status(500).send ({
              message:err.message || "Some error occurred while creating a create operation"
            })
        })
}

// Retrieve and return all users or retrieve and return a single user
exports.find = (req, res) => {
    Userdb.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({message:err.message || "Error occurred while retrieving user information"})
        })
}

// Update a new identified user by userID
exports.update = (req, res) => {

}

// Delete a user with specified userID in the request

exports.delete = (req, res) => {

}

