var arr = [10, 20, 30, 40, 50];

var filteredArray = arr.filter(function (element, index) {
  var result = element < 30;
  return result; //[]
});

console.log(filteredArray);
