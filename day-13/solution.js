// implicit binding
/* In method -this- keyword used in object 
then its point value to object keys */
// let object = {
//   name: "he",
//   age: 22,
// };let object2 = {
//   name: "her",
//   age: 232,
// };
// console.log(object,object2);

// function print(obj) {
//     obj.logmsg = function () {
//         console.log(`${this.name} is ${this.age}`);
//     }
// }
//  print(object);
// object.logmsg();

// Function

// function outer(a) {
//     console.log(a, this);;
//     return function inner(b) {
//         console.log(b, this)
//     }
// }
// let func = outer(3)
// func(5);

// //Arrow function

// let fun = () => console.log( this);
// fun();
// function outer() {
//   console.log(this);

//   function inner() {
//      console.log(this);
//     let arow = () => console.log(this);
//     arow();
//   }
//   inner();
//    console.log(arow() === this);
//    console.log(this);
// }
// outer();

// const food = {
//     name: 'dosa',
//     colr: 'brown',
//     getDish :function() {
//         return () => (`${this.name} is ${this.colr}`)
//     }
// }
// console.log(food.getDish());
// let refunc = food.getDish()
// console.log(refunc());

// let obj = {
//     name: "senthur",
//     do() {
//         console.log(this.name);
//     }
// }
// let func = obj.do;
// func.call(obj)
// func.apply(obj)
// let newfunc = func.bind(obj)
// newfunc();

// const user = {
//   name: "tapaScript",
//   greet: function () {
//     return () => {
//        console.log(`Hello, ${this.name}!`);
//     };
//   },
// };
// let func = user.greet();
// func();

// const obj = {
//   name: "Tom",
//   greet: function () {
//      console.log(`Hello, ${this.name}!`);
//   },
// };
// obj.greet();

// const user = {
//   name: "Alex",
//   greet: function () {
//     function inner() {
//       return () => {
//         console.log(`Hello, ${this.name}!`);
//       };
//     }
//     inner()
//   },
// };
// let nef = user.greet();
// nef()

// const Sports = function(name, players) {
//     this.name = name;
//     this.players = players;
// }

// const circket = new Sports("circket", 11)
// const kabadi = new Sports("kabadi", 7)

// console.log(circket)
// console.log(kabadi)

// const car1 = {
//   brand: "Audi",
//   model: "A8",
//   describe: function () {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "X1",
// };

// car1.describe.call(car2)

// car1.describe.apply(car2)

// const newfunc = car1.describe.bind(car2)
// newfunc()

// const person = {
//   name: "Charlie",
//   sayHello: function () {
//     console.log(this.name);
//   },
//   sayHelloArrow: () => {
//     console.log(this.name);
//   },
// };

// person.sayHello();
// person.sayHelloArrow();

// let cars = {
//   name : "Audi",
//   model : "we3",
//   showCase: function () {
//     console.log(`${this.name} model is ${this.model}`);
//   },
// };

// const bmw = {
//     name : "BWM",
//     model:"cw4"
// }
// const bmw2 = function (name, model) {
//     name,
//     model
// }

// console.log(bmw instanceof cars)
// // cars.showCase.call(bmw)
// cars.showCase.apply(bmw2, "bmw", "eds" )

// const car1 = {
//   brand: "Audi",
//   model: "A8",
//   describe: function () {
//     console.log(`This car is a ${this.brand} ${this.model}.`);
//   },
// };

// const car2 = {
//   brand: "BMW",
//   model: "X1",
// };
// car1.describe.call(car2)

// const Sports = function(name, players) {
//     this.name = name;
//     this.players = players;
// }

// const circket = new Sports("circket", 11) 
// const kabadi = new Sports("kabadi", 7) 

// console.log(circket)
// console.log(kabadi)

// console.log(kabadi instanceof Sports);