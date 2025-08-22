var obj = {
  name: "S1",
  city: "hyd",
  gender: "male",
};

var { name, city } = obj;

var arr = [10, 20, 30, 40, 50];

var [x, y, z, a, b] = arr;

console.log(z, y); //30 20
console.log(b); //50

// console.log(arr[2]); //30
// console.log(arr[4]); //50

function f1() {
  //   var x = obj.city;
  var x = city;
  console.log(x);
}

function f2() {
  //   var y = obj.name;
  var y = name;
  console.log(y);
}

// f1();
// f2();
