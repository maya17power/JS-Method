// use filter to iterate thru array and filter out values
//sililar to map by using val as perameter.

var myArray = [1,2,3,4,5,6,7,8,9,10];

var newArray = myArray.filter(function(val){
 // return val == 5 || val == 8 || val == 2;
  //return val !== 5||6||7||8;
 // return val < 6; cal also be used
});

console.log(newArray);
