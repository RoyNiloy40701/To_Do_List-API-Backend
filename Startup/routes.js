const tasks = require('../Routes/tasks');
const users = require('../Routes/users');
const auth = require('../Routes/auth');
const express = require('express');


module.exports = function (app) {
     app.use(express.json());
     app.use('/api/tasks', tasks);
     app.use('/api/users', users);
     app.use('/api/auth', auth);
}

