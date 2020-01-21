//Server created using http

/*var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.end('Hello World');
});

server.listen(8000,function(){
    console.log("Server running in PORT:8000");
});*/

//Server created using express

var express = require('express');
var app = express();
var add = require('./additon.js');
add.addition(109,8190);
app.set('view Engine','jade');
app.get('/',function(req,res){
    res.end("Hello World using express");
});
app.get('/angular',function(req,res){
    res.end("Hello World using Angular JS");
});
app.get('/node',function(req,res){
    res.end("Hello World using Node JS");
});
app.listen(8000,function(){
    console.log("Server running in PORT:8000");
});
