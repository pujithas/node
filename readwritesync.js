/**
 * Created by PUJITHA on 3/11/2017.
 */
var fs= require("fs");
var readm=fs.readFileSync('read','utf8'); // firt param is the file name and second is the encoding
console.log(readm);
fs.writeFileSync('read1',readm);// first param is the file that has to be ovwer written


/*readFile is asynchronous function
/*fs.readFile('read','utf8',functio(err,data)
 {

 console.log(data);
 // fs.writFile('read1',data);
*/