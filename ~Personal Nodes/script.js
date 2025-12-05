// console.log("fien");
// let div = document.getElementById("div").innerText = "hi";

// const person = {
//     name : "senthur",
//     age : 20,
//     isMad : true,
//     love : ''
// }

// console.log(person.name,`he is mad ${person.isMad}`, person.age);
// person.name = 'senthurvel'
// console.log(person.name,`he is mad ${person.isMad}`, person.age);

/* 
Operators
    -Arithmetic Operator
    -Comparison Operator
    -Logical Operator
    -Conditional Operator   
*/

// Arithmetic Operator

// let a = 10;
// let b = 20;

// console.log(a + b);
// console.log(a - b);
// console.log(b - a);
// console.log(a * b);
// console.log(a / b);
// console.log(b % a);
// console.log(a ** b);
// console.log(a++);
// console.log(a);
// console.log(++a);
// console.log(b--);
// console.log(--b);

// console.log((a += 3));
// console.log((a -= 5));
// console.log((a *= 2));
// console.log((a /= 2));
// console.log((a %= 4));
// const x = 5;
// x = x - 3;

// -Comparison Operator

// console.log(0 == null);
// console.log(0 == undefined);
// console.log(0 == "0");
// console.log(22 == "22");
// console.log(2 == "two");
// console.log(2 != "2");
// console.log(2 != "two");
// console.log(null === null);
// console.log(undefined === undefined);
// console.log(2 === "2");

// let obj1 = { name: "senthur" };
// let obj2 = { name: "senthur" };
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// console.log(2 > 3);
// console.log(4 > 2);
// console.log(2 >= 2);
// console.log(2 < 2);
// console.log(2 < 4);
// console.log(2 <= 2);
// console.log(2 >= "2");
// console.log(4 < `8`);
// console.log(0 > null);
// console.log(null > 0);

// console.log("Senthur" > "senthur");
// console.log("Senthur" < "senthur");
// console.log("Senthurvel" > "senthur");
// console.log("senthurvel" > "senthur");
// console.log("cat" < "CAT");
// console.log("cat" > "CAT");
// console.log("cat" >= "cat");
// console.log("CAT" === "CAT");

/* -Logical Operator
    &&  - || - ?? -  ! 
*/

// console.log(false && false);
// console.log(true && false);
// console.log(true && true);
// console.log(false && true);
// console.log("Cow" && "Cat");
// console.log(0 && "Dog");
// console.log(0 && -1);
// console.log(-2 && -1);
// console.log(2 > 4 && 2 === 2);

// console.log(false || false);
// console.log(true || false);
// console.log(true || true);
// console.log(false || true);
// console.log("Cow" || "Cat");
// console.log("Cow" || "2");
// console.log(2 || 4);
// console.log(0 && -1);
// console.log(-3 && -1);
// console.log(0 && -1);
// console.log(1 || -1);

// console.log(!true);
// console.log(!false);
// console.log(2 != 2);

// Nullish coalescing operator (??)
//  -is First Operant is null or underfined print 2nd operant.

// console.log(null ?? 2);
// console.log(null ?? null);
// console.log(undefined ?? 2);
// console.log(false ?? true);
// console.log(0 ?? 2);
// console.log(-1 ?? 2);
// console.log("cat" ?? null);

// Ternary Operator

// let age = 32;
// console.log(age >= 60 ? "Senior Citizen" : "Non Senior Citizen");

// BitWise Operators
// 10 in decimal
// 10 in 32 bits representation od 0,1

// &,  |,  ^,    ~,      <<,         >>
//and, or, xor, not, shift-left, shift-right

//  console.log(15 & 9)
//  console.log(9 & 15)

//  console.log(15 | 9 )
//  console.log(9 | 15)

//  console.log(15 ^ 9)
//  console.log(9 ^ 15)

//  console.log(9 << 2)
//  console.log(15 << 9)

//  console.log(9 >> 2)
//  console.log(15 >> 9)

// Loops
// For Loops

// for ( let i = 0; i <=2; ++i) {
//     console.log('hello'+ i++);
// }
// for ( let j = 0; j <=2; j++) {
//     console.log('hello'+ ++j);
// }

// let nameIs = 'senthurvelduraisamik'
// for (let i = 0; i < nameIs.length; i++) {
//     console.log(nameIs.charAt(i++)); //for odd letters
//     console.log(nameIs.charAt(++i)); //for even letters
// }

// for (let i = 1; i<=3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log("Rows", i , "Cols", j)
//     }
// }

//Break and Continue statement
// for (let i = 1; i <=10;i++) {
//     console.log(i);
//     if(i === 3) {
//         console.log(i);
//         break;
//     }
//     console.log(i);
// }

// for (let j = 1; j <=10; j++){
//     console.log(j)
//     if(j ===5){
//         console.log(j)
//         continue;
//     }
//     console.log(j)
// }
// console.log()

// let rows = 6;
// for (let i = 1; i <= rows; i++) {
//   let pattern = "";
//   for (let j = 1; j <= i; j++) {
//     pattern += `*`;
//   }
//   console.log(pattern);
// }

// Functions

// function dothis(a, b) {
//   sum = a+b;
//   return sum;
// }

// let result = dothis(2,8)
// console.log(result);
// console.log(sum);
// dothis(5,3);
// dothis(25,3);
// console.log(sum);

// function multi(x){
//   double = 2*x;
//   return double;
// }
// multi(sum);
// console.log(double);

// Rest Parameter
// function sumall(a, b, ...rest) {
//   console.log(a,b,rest)
// }
// sumall(10,3,4,544,43)

// Nested Functions
// function outer() {
//   console.log("Outer");
//   return function inner() {
//     console.log("Inner");
//     function inner2() {
//       console.log("Inner2");
//     };
//     inner2();
//   };
// }
// outer();
// let retFunc = outer();
// console.log(retFunc(),inner2());

// Callback functions
// function foo(func) {
//   console.log("foo");
//   func();
// }
// const buz = function () {
//   console.log("buz");
//   let car = function () {
//     console.log("hello");
//     return car;
//   };
// };
// let vari = car();
// console.log(vari)
// foo(buz);

// let isAnswered = false;
// function callHim(dail) {
//   console.log("Im calling him");
//   if (isAnswered) {
//     dail();
//   } else {
//     console.log('But Not answered')
//   }
// }
// let Answered = function () {
//   console.log('Hello WhatsUp bro');
// }
// callHim(Answered);

// Pure Function
// function greet(name) {
//   return "Hello " + name;
// }
// console.log(greet("Samantha"));
// console.log(greet("Samantha"));

// // Side effects func
// let say = "Hello ";
// function greets(name) {
//   return say + name;
// }
// console.log(greets("Samantha"));
// say = "Love u ";
// console.log(greets("Samantha"));

// Arrow Function

// SCope CLass Tasks

// function outer() {
//     function inner() {
//         console.log(user);  //Bob - because it's from nearest scope
//     }
//     let user = "Bob";
//     inner();
// }
// outer();

// let total = 0; // Global, bad practice
// function add(num) {
//     total += num;
// }

// add(5);
// add(10);
// console.log(total);

// function scope() {
//     console.log(i)
//     two();
// }
// function two() {
//     let i = 20;
//     console.log(i)
// }
// scope();

// function showAge() {
//   let age = 25;
//   console.log(age);
// }

// console.log(age);

// let message = "Hello";

// function outer() {
//   let message = "Hi";

//   function inner() {
//     console.log(message);
//   }

//   inner();
// }

// outer();

// let x = "Global";

// function outer() {
//   let x = "Outer";

//   function inner() {
//     let x = "Inner";
//     console.log(x);
//   }

//   inner();
// }

// outer();

// function counter() {
//   let count = 0;
//   return function () {
//     count--;
//     console.log(count);
//   };
// }

// const reduce = counter();
// reduce();
// reduce();

// function testClosure() {
//     let x = 10;
//     return function () {
//         return x * x;
//     };
// }
// console.log(testClosure()());

// function clickMe() {
//   let count = 0;

//   document.getElementById("btn").addEventListener("click", () => {
//     count++;
//     console.log(`You Cilcked ${count} time(s)`);
//   });
// }
// clickMe();

// function createMultiplier(multiplier) {

//   return function multiply(){
//      console.log(multiplier * 4 )
//   }
// }
// createMultiplier();

// function Factory(number) {
//   let count = number;

//   return {
//     "increment" : () => {
//       count++;
//       console.log(count);
//     },
//     "decrement" : () => {
//       count--;
//       console.log(count);
//     },
//     "reset" : () => {
//       count = 0;
//     }
//   }
// }
// let action = Factory(8);
// action.decrement();
// action.decrement();
// action.decrement();
// action.increment();
// action.increment();
// action.increment();
// action.increment();
// action.decrement();
// action.reset()
// action.decrement();

// function outer() {
//   let count =0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   inner()
//   inner()
// }
// outer();

// function outer() {
//   let count =0;

//   return function inner() {
//     count++;
//     console.log(count);
//   }
// }
// let plus = outer();
// plus();
// plus();
// plus();
// plus();
// plus();

// let car = prompt('enter your fav car', '');
// let count = prompt('enter how many cars', '')

// let favCars = {
//   [car] : 4
// }
// console.log(favCars)
// console.log(favCars["car"])

//Objects
// let person = {
//   name : "senthur",
//   age : 20
// }

// person.isEmployee = true
// person["have Gf"] = false

// console.log(person);

// delete person["have Gf"];
// delete person.isEmployee;
// console.log(person);

// Constructor Function
// Object Destructuring

//Error handling

// function divide(a,b) {
//     try {
//         if(b===0) {
//             const err = new Error("Divison by zero not allowed");
//             throw err;
//         }
//         const divide = a/b;
//         console.log(divide);
//     } catch (error) {
//         console.info(error)
//         console.error("somthinfd", error.message)
//     }
// }
// divide(4,4);
// divide(45,0)

// const person = {
//   name: "senthur",
//   address: {
//     city: "hh",
//   },
// };

// function getPostableCode(obj) {
//   try {
//     if (undefined) {
//       throw new Error("Accesing undefined");
//     }
//     console.log(person.address.city);
//     console.log(person.address.zip.num);
//   } catch (error) {
//     console.log(error.name);
//     console.log(error);
//   }
// }
// getPostableCode(person);

// try {
//     let r = p + 50;
//     console.log(r);
// } catch (error) {
//     console.log("An error occurred:", error.name);
// }

// function processPayment(amount) {
//     try {
//         if(amount <= 0 ){
//             throw new Error("Amount is Invaild:");
//         }
//         return console.log(`${amount} is processed`)
//     } catch (error) {
//         console.error("Error:", error.message);
//     }
// }

// processPayment(-1);

// /3. Implement a custom error handling system for an e-commerce website that categorizes errors as

// function UserError(message) {
//   this.name = "UserError";
//   this.message = message;
// }

// function userValidation(name) {
//   if (name === "" || name === undefined) {
//     throw new UserError(`Name must be entered: You entered : ${name}`);
//   }
//   return `User name is ${name}`;
// }
// try {
//   const message = userValidation("s");
//   console.log(message);
// } catch (error) {
//   console.log(`${error.name}:${error.message} `);
// }

// function PaymentError(message) {
//   this.name = "PaymentError";
//   this.message = message;
// }

// function paymentWithTax(amount) {
//   if (amount > 200) {
//     let tax = amount + 20;
//     throw new PaymentError(`Paying with Taxes:${amount} + 20 : ${tax}`);
//   }
//   return `Paying ${amount}`
// }

// try {
//   const message = paymentWithTax(555);
//   console.log(message);
// } catch (error) {
//       console.error(`${error.name}:${error.message} `);
// }

// function ServerError(message) {
//     this.name = "ServerError";
//     this.message = message
// }

// function checkServerIsOn(server) {
//     if(server === "" || !server === NaN) {
//         throw new ServerError("Enter vaild server name")
//     }
//     return `Server doing fine`
// }

// try {
//     const serverSwitch = checkServerIsOn("sdfr")
//     console.log(serverSwitch, message)
// } catch (error) {
//       console.log(`${error.name}:${error.message} `);

// }

// function EmailVaild(message) {
//     this.name = "EmailVaild";
//     this.message = message
// }

// function checkMail(mail) {
//     if(!mail.includes("@")) {
//         throw new EmailVaild("Enter vaild mail id", `You typed ${mail}`)
//     }
//     return `${mail} mail is vaild`
// }

// try {
//     const vaildMail = checkMail("bad@mail.com")
//     console.log(vaildMail);
// } catch (error) {
//       console.log(`${error.name}:${error.message} `);
// }

// function checkAPI(url) {
//   if (!url.startsWith("https")) {
//     throw new Error("Invalid URL");
//   }
//   console.log("Api is loaded");
//   return `API is safe to use`;
// }

// try {
//     let error1 = checkAPI("htstpsfg")
//     console.log(error1);

// } catch (error) {
//     console.error(`${error.name}: ${error.message}`)
//     console.error(error)
// }

// Explicit Binding bind(), call(), apply()
// const likes = function(hobby1, hobby2) {
//     console.info(this.name + ' likes ' + hobby1 + ' , ' + hobby2);
// }
// const person = {
//     name: "Tapas"
// }
// likes.call(person, "Sleeping", "Eating")

// const hobbiesToApply = ["Sleeping", "Eating"];
// likes.apply(person, hobbiesToApply)

// const newFn = likes.bind(person);
// newFn("eat", "sleep")

// check variable types
// let obj = {
//   var1: {},
//   var2: [],
//   var3() {},
//   var5: 3,
// };
// let arr = [(var1 = {}), (var2 = []), function var3() {}, (var5 = 3)];
// var1 = {};
// var2 = [];
// function var3() {}
// var5 = 3;

// console.log(typeof var1);
// console.log(typeof var2);
// console.log(typeof var3);
// console.log(typeof var5);

// for (let key in obj) {
//   console.log(typeof key);
// }

// for (let key in arr) {
//       console.log(typeof key);
// }

// const salad = ['b', 's', 'e', 'd'];
// console.log(Array.isArray(salad));
// console.log(Array.isArray([
//     {
//         name: 'senthur'
//     }
// ]));

const salad = ['apple','orange', 'oleve', 'carrat'];

// let clone = salad.slice()
// console.log(clone === salad);

// let newcolne = [...salad]
// console.log(clone === newcolne);
// console.log(newcolne.values === salad.values);
