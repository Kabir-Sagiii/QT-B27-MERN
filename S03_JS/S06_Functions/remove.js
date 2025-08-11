var user = {
  username: "sagar",
  id: 101,
  gender: "male",
  email: "sagar@gmail.com",
};

console.log(user);

delete user.id;
delete user.email;

console.log(user);
