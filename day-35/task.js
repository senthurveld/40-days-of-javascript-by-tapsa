// ## 1. Closure Confusion

// function makeMultipliers() {
//   const result = [];
//   for (let i = 1; i <= 3; i++) {
//     result.push(function (num) {
//       return num * i;
//     });
//   }
//   return result;
// }

// const [double, triple, quadruple] = makeMultipliers();

// console.log(double(2)); // Expected: 2 * 1 = 2
// console.log(triple(2)); // Expected: 2 * 2 = 4
// console.log(quadruple(2)); // Expected: 2 * 3 = 6

// add let to var just changed every thing

// ## 2. Async Bug with setTimeout in Loop

// for (var i = 0; i <= 3; i++) {
//     console.log("Count:", i);
// }

// ## 3. Object Mutation Trap

// const config = {
//   appName: "CoolApp",
//   version: "1.0",
// };

// let config2 = config

// function updateConfig(newConfig) {
//   config2 = { ...config, ...newConfig };
// }

// updateConfig({ version: "2.0" });

// console.log(config2);

// ## 4. Promise Chain Gone Wrong

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received");
    }, 1000);
  });
}

async function start() {
  try {
    const data = fetchData().then((res) => {
      console.log("Then block:", res);
      throw new Error("Something went wrong!");
    });
    console.log("Data:", await data);
  } catch (err) {
    console.error(err.message);
  }
}

start();
