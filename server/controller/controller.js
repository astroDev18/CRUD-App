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

    if (req.query.id) {
        const id = req.query.id;

        Userdb.findById(id)
            .then(data => {
               if (!data) {
                   res.status(404).send({message: "Not found user with id" + id})
               } else {
                   res.send(data);
               }
            })
            .catch(err => {
                res.status(500).send({ message: "Error retrieving user with id" + id})
            })
    } else {
        Userdb.find()
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({message: err.message || "Error occurred while retrieving user information"})
            })
    }
}

// Update a new identified user by userID
exports.update = (req, res) => {
    if(!req.body) {
        return res
            .status(400)
            .send({message: "Data to update cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false})
        .then(data => {
            if(!data) {
            res.status(404).send({ message: `Cannot update user with ${id}. Perhaps user is not found.`})
            } else {
                // res.send(data)
                res.redirect("/add-user")
            }
            })
        .catch(err => {
            res.status(500).send({message: "Error update user information"})
        })
}

// Delete a user with specified userID in the request

exports.delete = (req, res) => {
    const id = req.params.id;

    Userdb.findByIdAndDelete(id)
        .then(data => {
            if(!data) {
                res.status(404).send({ message: `Cannot Delete user with id ${id}. Check if id is correct.`})
            } else {
                res.send({
                    message: "User was deleted successfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete user with id=" + id
            })
        })
}
