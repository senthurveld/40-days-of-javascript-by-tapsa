// Create a Promise
// let getUser = new Promise(function (resolve, reject) {
//   const user = {
//     name: "John Doe",
//     email: "jdoe@email.com",
//     password: "jdoe.password",
//     permissions: ["dev", "hr"],
//   };
//   resolve(user);
// });

// getUser.then((user) => {
//   console.log(`hi ${user.name}`);
//   setTimeout(() => {
//     console.log(`welcome`);
//   }, 500);
// });

// getUser
//   .then((user) => {
//     console.log(user.name);

//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         reject("Bangalore");
//         resolve("Tirupur");
//       }, 2000);
//     });
//   })
//   .catch((address) => {
//     console.log(address);
//   });

// getUser
// .then((user) => {
//   console.log(user.name);
//   return user.email;
// }).then(function(email) {
//     console.log(email);

// })

// getUser
//   .then((user) => {
//     console.log(`Hi ${user.name}`);

//     if (!user.permissions.includes("md")) {
//       throw new Error("Youre not allowed to go md room");
//     }
//     return user.email;
//   })
//   .then((email) => {
//     console.log(`Email is ${email}`);
//   })
//   .catch((error) => {
//     console.error(error);
//     return error;
//   });

// let promise401 = new Promise(function (resolve, reject) {
//   reject(401);
// });

// promise401
//   .catch((error) => {
//     console.log(error);

//     if (error === 401) {
//       console.log("Rethorw error");
//       throw error;
//     } else {
//     }
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const BULBASAUR_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/bulbasaur";
// const RATICATE_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/raticate";
// const KAKUNA_POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon/kakuna";

// let promise_1 = getPromise(BULBASAUR_POKEMONS_URL);
// let promise_2 = getPromise(RATICATE_POKEMONS_URL);
// let promise_3 = getPromise(KAKUNA_POKEMONS_URL);

// Promise.all([promise_1, promise_2, promise_3])
//   .then(function (result) {
//     console.log(result);
//     result.forEach((elem) => {
//         console.log(elem.name, elem.weight);
//         elem.abilities.forEach((el) =>{
//           console.log(el.ability.name);
//         })
//     })
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.any([promise_1, promise_2, promise_3])
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// Promise.allSettled([promise_1, promise_2, promise_3])
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 1. Create Your First Promise

// let firstPromise = new Promise(function (resolve, reject) {
//   return resolve(`Hello, Promises!`);
// });

// firstPromise.then((result) => console.log(result),1000);

// Reject a Promise

// let firstPromise = new Promise(function (resolve,reject) {
//   reject(`Something went wrong!`);
// });

// firstPromise.catch((error) => console.error(error));

// Simulate Coin Toss

// let coin = new Promise(function (resolve, reject) {
//   resolve(Math.floor(Math.random() * 2));
// })
//   .then((result) => {
//     if (result === 1) {
//       console.log("Heads");
//     } else {
//       console.log("Tails");
//     }
//   })
//   .catch((error) => console.log(error));

// ## 4. Promise with Condition
// let age = 43;
// let conditionPromise = new Promise(function (resolve, reject) {
//   resolve(age >= 18);
// })
//   .then((result) => {
//     if (result) {
//       console.log("okay");
//     } else {
//       throw new Error("not okay");
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });

// 5. Chain Promises Sequentially

// let chain = new Promise(function (reslove, reject) {
//   reslove();
// });

// chain
//   .then(() => {
//     console.log("Step 1 done!");
//   })
//   .then(() => {
//     console.log("Step 2 done!");
//   })
//   .then(() => {
//     console.log("Step 3 done!");
//   });

// 6. Value Transformation in Chain

// let calc = new Promise(function (resolve, reject) {
//   resolve(5)
// })

// calc.then((value) => {
//   value *= value;
//   return value;
// }).then((value) => {
//   value = value * 4;
//   console.log(value);
//   return value;
// })

// Chain with Random Rejection

// let rans = new Promise(function(resolve, reject) {
//   resolve('done')
// }).then(() => {
//   console.log(`Start`);
// }).then((vaule) => {
//   throw new Error("Error for nothing")
// }).catch((error) => {
//   console.error(error);
// })

// ## 8. Multiple then() calls on same Promise

// let mlt = new Promise(function (resolve, reject) {
//   resolve(10);
// });
// mlt.then((result) => {
//   result = 5 + result;
//   console.log(result);
//   return result;
// });
// mlt.then((result) => {
//   result = 15 + result;
//   console.log(result);
// });

// let then = new Promise(function (resolve, rejetc) {
//   resolve();
// })
//   .then(() => {
//     setTimeout(() => {
//       console.log("First");
//     }, 1000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Second");
//     }, 2000);
//   })
//   .then(() => {
//     setTimeout(() => {
//       console.log("Third");
//     }, 3000);
//   });


# 10. Implement fakeDBQuery() 