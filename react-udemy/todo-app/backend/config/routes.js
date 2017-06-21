const express = require('express');

module.exports = function(server) {
    const router = express.Router();
    server.use('/api', router);

    const todoService = require('../src/api/todo/todoService');
    todoService.register(router, '/todos');
}
