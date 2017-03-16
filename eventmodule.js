/**
 * Created by PUJITHA on 3/11/2017.
 */
var events= require("events");
var util=require("util");

var custom= new events.EventEmitter();
custom.on('myevent',function(msg){
   console.log(msg);
});
custom.emit('myevent','here');// emitting the event
