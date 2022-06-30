const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type': 'text/html'});
    const html1 = fs.readFileSync(__dirname + '/index.htm');
    const html = fs.createReadStream(__dirname + '/index1.htm').pipe(res);
    // res.end(html1);
    res.end(html);
    
}).listen(1337,'127.0.0.1');