/**
 * Created by PUJITHA on 3/12/2017.
 */
var express= require("express");
var app = express();
app.listen(9008);

app.get('/profile/:id',function(req,res){
    res.send(" you requested aprofile with id"+req.params.id)
})