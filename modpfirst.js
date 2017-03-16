/**
 * Created by PUJITHA on 3/11/2017.
 */

var add = function(a,b){
    return 'sum of number  is ${a+b}';

};
var sub= function(a,b){
    //use backticks ,current version doesn't support string templates.
    return 'sub is ${a-b}'; // This ECMA Script ,use template strings,we can use variables and epressions without any conccatenation symbol

}
var pi=3.14;
module.exports={
    add:add ,
    sub:sub,
    pi:pi
}
//module.exports.add=add;
//module.exports.sub=sub;
//module.exports.pi=pi;
