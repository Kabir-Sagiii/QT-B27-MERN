function f1(getData) {
  //   console.log(getData);
  getData();
}

f1(function () {
  console.log("I am a anonymous callback function");
});

f1(() => {
  console.log("I am an arrow function callback");
});
