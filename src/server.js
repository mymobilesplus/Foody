const express = require('express');
const nunjucks = require('nunjucks');
const routes = require('./routes');

const server = express();

server.use(express.static('public')); 
server.use(routes);

server.set("view engine", "njk");
nunjucks.configure("src/app/views", {
    express:server, 
    autoescape: false,
    noCache: true
});



server.listen(3333, function() {
    console.log({
        "name": "server",
        "situation": "running"
    });

});
