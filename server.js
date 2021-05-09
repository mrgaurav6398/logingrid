var http = require('http');
var fs = require('fs');
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'content-Type': 'text/html' });

    var ReadStream = fs.createReadStream(__dirname + '/assign.html', 'utf8');

    ReadStream.pipe(res);


});

server.listen(3000, '127.0.0.1');
console.log('hey');

// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(req, res) {
//     console.log('Request was made : ' + req.url);
//     res.writeHead(200, { 'content-Type': 'text/html' });
//     var myReadStream = fs.createReadStream(__dirname + '/assign.html', 'utf8');
//     myReadStream.pipe(res);
// });
// server.listen(3000, '127.0.0.1');