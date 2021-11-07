var jsonServer = require('json-server');
var data = require('./data');
var server = jsonServer.create();
var router = jsonServer.router(data());
var middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(function (req, res, next) {
    req.query = {}; // disable filtering and other fancy features
    var delay = 0;
    if (req.path == '/users') {
        delay = Math.random() * 11000;
    }
    if (delay >= 0.9 * 11000) {
        res.sendStatus(500);
    } else {
        setTimeout(next, delay);
    }
});
server.use(router);
server.listen(3001, function () {
    console.log('JSON Server is running')
});
