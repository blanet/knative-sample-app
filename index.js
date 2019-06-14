#!/usr/bin/env node

var http = require("http");
var PORT = 8080;

http.createServer(function(req, res){
	console.log("request received");
	if (process.env.MESSAGE) {
		res.end("<h3>" + process.env.MESSAGE + "</h3>\n");
	} else {
		res.end("<h3>Message Empty!<h3>\n");
	}
}).listen(PORT);

console.log("server started...");

