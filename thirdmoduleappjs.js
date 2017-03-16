/**
 * Created by PUJITHA on 3/11/2017.
 */
var second= require("./secondapp");
var thrid= function(){
    console.log(second(2));
    console.log("third function");
}
thrid();
// here the variable second stores the function "second" in secondapp,we are using the function second from other module in current module.