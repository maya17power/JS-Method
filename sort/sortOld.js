// use sort(); to sort our array values alphabetically or numerically.
//similar to filter
//this program will sort numbers in order
//flip perameters or returns to get assending or desending numbers

var oldArray = [1,4,2,3,5];

var newArray = oldArray.sort(function(a,b){
  return a * b ;
});

var reduceArray = oldArray.reduce(function(preValue, curValue){

});

console.log(newArray);
console.log(reduceArray);
