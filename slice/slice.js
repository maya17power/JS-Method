/*
slice() from array values to new variables;
*/


var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var words = "Peter Piper picked a peck of pickled peppers";
var num = 14;
num = num - 3;

var sliceFruits = fruits.slice(0,3);
var sliceFruits2 = words.slice(0,num);
console.log(sliceFruits2);
