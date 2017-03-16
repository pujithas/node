/**
 * Created by PUJITHA on 3/11/2017.
 */
var http=require("http");
var fs=require("fs");
var myread= fs.createReadStream(__dirname+'/read1','utf8');// to see the data you need to mention the encoding (utf8)
var mywrite=fs.createWriteStream(__dirname+'/read');

myread.on("data",function(chunk){
    console.log("chucnk received");
   mywrite.write(chunk);

});