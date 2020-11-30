const axios = require("axios");
const response = require("express");

exports.homeRoutes = (req, res) => {
    // Make a get request to api/users
    axios.get('http://localhost:3000/api/users')
        .then(function(response) {
            console.log(response.data);
            res.render("index", { users: response.data});
        })
        .catch(err => {
            response.send(err);
        })
}

exports.add_user = (req, res) => {
    res.render("add_user");
}

exports.update_user = (req, res) => {
    res.render('update_user');
}
