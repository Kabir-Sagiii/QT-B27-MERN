var arr = [10, 20, 30, 40, 50];

var newArray = arr.map(function (element, index) {
  var result = element * 100;
  return result; //[]
});

console.log(newArray);
