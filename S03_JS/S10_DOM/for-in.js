var obj = {
  username: "raj",
  gender: "male",
  city: "hyd",
  id: 101,
};

var count = 0;

for (var key in obj) {
  console.log(key);
  count = count + 1;
}

console.log(count);
