/**
 * Created by PUJITHA on 3/12/2017.
 */
var http=require("http");
var fs=require("fs");
// we can't pipe from writable stream since we have to read it.so we have pipe from read stream


var server = http.createServer(function(req,res){
    console.log("request is coming from"+req.url);
    if(req.url==='/home'|| req.url==='/') {

        res.writeHead(200, {"Content-Type": "text/html"});
        var myread = fs.createReadStream(__dirname + '/global.html', 'utf8');
        myread.pipe(res);
    }
    else {
        res.writeHead(404, {"Content-Type": "text/html"});var myread = fs.createReadStream(__dirname + '/global.html', 'utf8');
     res.end("reached a  n error page");

    }

});
// server lisens to the port for the reques
server.listen('5000');