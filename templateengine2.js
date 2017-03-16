/**
 * Created by PUJITHA on 3/12/2017.
 */
var express= require("express");
var app = express();
app.listen(9009);
app.set('view engine','ejs');// seeting iew engine to EJS
app.get('/',function(req,res){
    res.send("hey pujitha here");
});
//app.get('/read',function(req,res){
//res.sendFile(__dirname,'/read');
//});
app.get('/profile/:id',function(req,res){
    var data={ name:'pujitha',age:0,hobbies:['books','songs']};
    res.render('index',{person:req.params.id,data:data});
});
app.get('/global',function(req,res) {
    res.sendFile(__dirname + '/global.html');
});