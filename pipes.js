/**
 * Created by PUJITHA on 3/11/2017.
 */
var http=require("http");
var fs=require("fs");
var myread= fs.createReadStream(__dirname+'/read1','utf8');// to see the data you need to mention the encoding (utf8)
var mywrite=fs.createWriteStream(__dirname+'/read');
// we can't pipe from writable stream since we have to read it.so we have pipe from read stream

myread.pipe(mywrite);