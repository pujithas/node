/**
 * Created by PUJITHA on 3/12/2017.
 */
var express= require("express");
var app = express();
app.listen(9000);
app.get('/',function(req,res){
    res.send("hey pujitha here");
});
app.get('/contact',function(req,res){
    res.send("hello contact page entered");
});