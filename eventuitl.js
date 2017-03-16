/**
 * Created by PUJITHA on 3/11/2017.
 */
var events= require("events");
var util=require("util");//  allows to inherits certain thing s fromthe object
//create a new obj constrctor
var person = function(fname) {
    this.fname = fname;
};
util.inherits(person,events.EventEmitter);
// here person objects is inheriting the EventEmintter
// we can have custom events to the person object
// for every person object constructor we create,we hav event attach to it.
var pujitha = new person("pujitha");
var bhavi=new person("bhavi");
var people = [pujitha,bhavi];
// for each person object,we are creating listenrs
people.forEach(function(person){
   person.on('likes',function(msg){
       console.log(person.fname+"likes"+msg);
   });
});
bhavi.emit('likes',"dff");