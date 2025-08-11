var x = function () {
  console.log("Anonymous function executed");
};

x();

function f1(p1) {
  p1();
}

f1(function () {
  console.log("Anonymous function passed as argument");
});
