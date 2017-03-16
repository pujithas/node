/**
 * Created by PUJITHA on 3/11/2017.
 */
var http=require("http");
var fs=require("fs");
// we can't pipe from writable stream since we have to read it.so we have pipe from read stream


var server = http.createServer(function(req,res){
    console.log("request is coming from"+req.url);
    res.writeHead(200,{"Content-Type":"text/html"});
    //var myread= fs.createReadStream(__dirname+'/read1','utf8');// to see the data you need to mention the encoding (utf8)
    var myread=fs.createReadStream(__dirname+'/global.html','utf8');
  myread.pipe(res);

});
// server lisens to the port for the reques
server.listen('7070');