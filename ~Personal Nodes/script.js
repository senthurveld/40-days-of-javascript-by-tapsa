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

let a = 10;
let b = 20;

console.log(a + b);
console.log(a - b);
console.log(b - a);
console.log(a * b);
console.log(a / b);
console.log(b % a);
console.log(a ** b);
console.log(a++);
console.log(a);
console.log(++a);
console.log(b--);
console.log(--b);

console.log((a += 3));
console.log((a -= 5));
console.log((a *= 2));
console.log((a /= 2));
console.log((a %= 4));
// const x = 5;
// x = x - 3;

// -Comparison Operator

console.log(0 == null);
console.log(0 == undefined);
console.log(0 == "0");
console.log(22 == "22");
console.log(2 == "two");
console.log(2 != "2");
console.log(2 != "two");
console.log(null === null);
console.log(undefined === undefined);
console.log(2 === "2");

let obj1 = { name: "senthur" };
let obj2 = { name: "senthur" };
console.log(obj1 == obj2);
console.log(obj1 === obj2);

console.log(2 > 3);
console.log(4 > 2);
console.log(2 >= 2);
console.log(2 < 2);
console.log(2 < 4);
console.log(2 <= 2);
console.log(2 >= "2");
console.log(4 < `8`);
console.log(0 > null);
console.log(null > 0);

console.log("Senthur" > "senthur");
console.log("Senthur" < "senthur");
console.log("Senthurvel" > "senthur");
console.log("senthurvel" > "senthur");
console.log("cat" < "CAT");
console.log("cat" > "CAT");
console.log("cat" >= "cat");
console.log("CAT" === "CAT");

/* -Logical Operator
    &&  - || - ?? -  ! 
*/

console.log(false && false);
console.log(true && false);
console.log(true && true);
console.log(false && true);
console.log("Cow" && "Cat");
console.log(0 && "Dog");
console.log(0 && -1);
console.log(-2 && -1);
console.log(2 > 4 && 2 === 2);

console.log(false || false);
console.log(true || false);
console.log(true || true);
console.log(false || true);
console.log("Cow" || "Cat");
console.log("Cow" || "2");
console.log(2 || 4);
console.log(0 && -1);
console.log(-3 && -1);
console.log(0 && -1);
console.log(1 || -1);

console.log(!true);
console.log(!false);
console.log(2 != 2);

// Nullish coalescing operator (??)
//  -is First Operant is null or underfined print 2nd operant.

console.log(null ?? 2);
console.log(null ?? null);
console.log(undefined ?? 2);
console.log(false ?? true);
console.log(0 ?? 2);
console.log(-1 ?? 2);
console.log("cat" ?? null);

// Ternary Operator

let age = 32;
console.log(age >= 60 ? "Senior Citizen" : "Non Senior Citizen");

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

let rows = 6;
for (let i = 1; i <= rows; i++) {
  let pattern = "";
  for (let j = 1; j <= i; j++) {
    pattern += `*`;
  }
  console.log(pattern);
}
