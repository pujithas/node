/**
 * Created by PUJITHA on 3/5/2017.
 */
var http= require("http"); //http instance
var port= 9090;
// function will be executed for every request received from cliet .This is a request listiner
http.createServer(function(req,res) {
    //working with GET request
    console.log(req.url);
    switch(req.method){
        case "GET":
            if(req.url==="/"){
                res.writeHead(200,{"Content-Type": "text/html"});
                res.write("<html><body>  Hello <a href='/calc'>here</a></body></html>");
                res.end();
    }
            break;
        case "POST":
        break;
        default:
            break;
    }
}).listen(port);
// here the server is lstening to the request,so whatever the requests that comes it only redirects to the hellword page

