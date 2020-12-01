const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

// @description Route route
// @method Get
route.get('/', services.homeRoutes);

// @description Route route
// @method Get
route.get('https://astrousers.herokuapp.com/add-user', services.add_user);


// @description Route route
// @method Get
route.get('https://astrousers.herokuapp.com/update-user', services.update_user);

// API
route.post('https://astrousers.herokuapp.com/api/users/', controller.create);
route.get('https://astrousers.herokuapp.com/api/users/', controller.find);
route.put('https://astrousers.herokuapp.com/api/users/:id', controller.update);
route.delete('https://astrousers.herokuapp.com/api/users/:id', controller.delete);

module.exports = route;