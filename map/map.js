//use map to iterate thru array and modify new instance of array leaving original un modified.

var oldArray = [1,2,3,4,5,6];

var newArray = oldArray.map(function(val){
                          console.log(val);
                          return val;
                            });

console.log(newArray.sort(function(a, b){
  return b - a;
}));
