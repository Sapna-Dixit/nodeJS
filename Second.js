var  http = require("http")
http.createServer(function(request, response)
{
    response.writeHead(200,{'Content-Type':'Text/plain'});

    //send the response as 'Hello World'
    response.end("Hello World\n");
}).listen(5000);

//console will print the message
// console.log('Server  running at http://127.0.0.1:5000/')
//(function(exports, require, module, _filename, dirname)

harry = {
    name : "Harry",
    favNum : 3,
    developer : true
}
console.log(exports, require, module, _filename, _dirname);


module.exports = harry;
