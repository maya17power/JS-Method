// 1.If compare (a,b) is less than zero, the sort( ) method sorts a to a lower index than b. In other words, a will come first.
// 2.If compare (a,b) is greater than zero, the sort( ) method sort b to a lower index than a, i.e., b will come first.
// 3.If compare (a,b) returns zero, the sort ( ) method considers a equals b and leaves their positions unchanged.

const alpha = ["Alpha", "Delta", "Charlie", "Bravo"];

//return accending alphabettically
alpha.sort();
console.log(alpha);

//return decending alphabettically
// relates to notes above this repl
alpha.sort(function(a,b){
  if(a > b){
    return -1;
  }
  if(a < b){
    return 1;
  }
    return 0;
});
console.log(alpha);
