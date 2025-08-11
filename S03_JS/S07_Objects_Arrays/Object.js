var product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
};

//Insert a new property
// product.rating = 4.5;
product["rating"] = 4.7;
console.log(product);

//accessing properties
var price = product["price"];
console.log(price);

//update Properties
product["inStock"] = false;
console.log(product);

//delete properties
delete product["name"];
console.log(product);
