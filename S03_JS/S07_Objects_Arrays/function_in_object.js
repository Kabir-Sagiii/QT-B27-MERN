var product = {
  name: "Laptop",
  price: 1200,
  inStock: true,
  qty: 50,
  totalPrice: function () {
    console.log("Anonymous function in object");
  },
  display: () => {
    console.log("Arrow function in object");
  },
};

product.totalPrice();
product.display();
