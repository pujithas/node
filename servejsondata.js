/**
 * Created by PUJITHA on 3/12/2017.
 */
var http=require("http");
var fs=require("fs");
// we can't pipe from writable stream since we have to read it.so we have pipe from read stream


var server = http.createServer(function(req,res){
    console.log("request is coming from"+req.url);
    res.writeHead(200,{"Content-Type":"text/json"});
var person ={
    name: 'pujitha',
    gender: 'female',
    nation:'india'
}
res.end(JSON.stringify(person)); // end pethod here expects a string ,so we nee to convert  JSON object to string
});
// server lisens to the port for the reques
server.listen('7000');