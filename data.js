var http= require("http");

function onrequest(request, response){
	console.log("Request recieved");
	response.writeHead(200,{"Content-Type": "text/plain"});
	response.write("hello world");
	response.end();

}
http.createServer(onrequest).listen(8112);
console.log("sERVER STARTED");