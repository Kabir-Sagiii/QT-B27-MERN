var arr = [10, 20, 30, 40, 50];

//Access Array elements

// arrayName[index]

// var element = arr[4];
// console.log(element);

arr.forEach(function (element, index) {
  // This function is called for each element in the array
  console.log(element * 3, index);
});
