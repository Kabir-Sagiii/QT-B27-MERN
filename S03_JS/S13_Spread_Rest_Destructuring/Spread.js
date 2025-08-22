var obj1 = {
  username: "s1",
  city: "hyd",
  gender: "male",
};

var obj2 = {
  ...obj1,
  username: "Sanjay",
  email: "sanjay@gmail.com",
};

var arr1 = [10, 20, 30, 40, 50];

var arr2 = [true, ...arr1, "hello"];

console.log(arr1);

console.log(arr2);
