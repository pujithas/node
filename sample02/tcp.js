/**
 * Created by PUJITHA on 3/5/2017.
 */
var net =require("net") ;  // net module is used to create a TCP Server
var server=net.createServer();
server.on("connection",function(socket){
    var remoteportnum=socket.remotePort;
    console.log("new connection is made");
    console.log("data is coming from remoteport is %s",remoteportnum);

    socket.on("data",function(d){

        socket.write("hello is "+d );
        });
    socket.once("close",function(){
       console.log("connection closed %s", remoteportnum);
    });
    socket.on("error",function(err){
        console.log("erroe is %s",err.message);
    });
  });

server.listen(9000,function(){
   console.log("server listening to theee 9000 port");
});