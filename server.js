var http = require("http");
var url = require("url");
var router= require("./router");

function start( ) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
     
    console.log("Request for " + pathname + " received.");
    router.route(pathname);
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
  }

  http.createServer(onRequest).listen(8116);
  console.log("Server has started.");
}

exports.start = start;