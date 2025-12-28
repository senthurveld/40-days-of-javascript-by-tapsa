// console.log("hello");

import * as calc from "./calc.js";

const blog = Promise.allSettled([
  await import("./post.js"),
  await import("./user.js"),
]);

import { user } from "./api.js";
const userDetails = document.getElementById("user");

console.log(user);
user.fetchUser();
setTimeout(() => {
  userDetails.innerHTML = `${user.name} is ${user.age} years old!`;
}, 2000);

// calc.subtract(12, 5);
// calc.add(2, 5);
// calc.divide(13, 2);
// calc.multi(5, 6);

// console.log(blog);
// console.log(
//   blog[0].valueOf(
// ))
