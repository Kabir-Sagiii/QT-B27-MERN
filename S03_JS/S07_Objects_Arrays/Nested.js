var user = {
  name: {
    first: "John",
    last: {
      old: "Doe",
      new: "Smith",
    },
  },
  gender: "male",
  age: 30,
};

console.log(user.name.last.new);
console.log(user["name"]["first"]);
