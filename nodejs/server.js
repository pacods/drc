var http = require('http');

var server =  http.createServer(function(request, response){
    response.writeHead(200);
    response.write('<h1>Hello from NodeJs Required</h1>');
    response.end();
});

server.listen(8080);
console.log('Server on URL localhost and PORT 8080');