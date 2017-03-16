/**
 * Created by PUJITHA on 3/10/2017.
 */
console.log("hello");
console.log(__dirname);// to know the current path
// these are called from the window object generally in the javascript,but we use these objects(Console,__dirname) in node js directly.

//function statement
function calculate( ){
    console.log("calculation");
}
calculate();

//function expression
var cal= function(){
    console.log("calculation 2");
}
cal();

function callfunction(fun){
    fun();
}
callfunction(cal);
