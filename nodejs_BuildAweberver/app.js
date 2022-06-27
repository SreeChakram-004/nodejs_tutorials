const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey Watsappp');
}).listen(1337,'127.0.0.1')