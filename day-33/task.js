// const arr = [
//     ["name", 'tt'],["age", 33],[2 , 22]
// ];

// const arrObj = Object.fromEntries(arr);

// console.log(arrObj);
// console.log(arr);

// arrObj.forEach((key, value) => {
//     console.log(`${key}, ${value}`);
// })

// for (const [key, value] of arrObj) {
//     console.log(key, value);
// }

// const one = new Set([1, 2, 3, 4]);
// const two = new Set([2, 4, 6, 8]);

// console.log(one.union(two));
// console.log(one.intersection(two));
// console.log(two.difference(one));
// console.log(one.difference(two));

// ## 1. Create a Map of Student IDs and Names

const student = new Map();

student.set(1, "senthur");
student.set(2, "sam");
student.set(3, "james");
student.set(4, "lalo");
student.set(5, "jimmy");
3;
console.log(student);
console.log(student.size); //5
console.log(student.get(1));

student.delete(1);
console.log(student);
console.log(student.size); //4

// ## 2. Create a Set of Programming Languages

const programming = new Set([
  "java",
  "python",
  "javascript",
  "tapascript",
  "c++",
]);
console.log(programming.size);

programming.add("java");
programming.add("c");
console.log(programming.size);
programming.add("c++");

console.log(programming.size);

programming.forEach((el) => {
  console.log(el);
});

// ## 3. Compare Object vs Map for Key-Value Storage

const aMap = new Map();
aMap.set("name", 'senthur')
aMap.set("name", "reamesh");
aMap.set("age", 21)
aMap.set("me", 'ramesh')

const aObject = {
  name: "senthur",
  name: "ramesh",
  age : 21,
  me : 'ramesh'
};

console.log(aMap); 
console.log(aObject); // in console differ
// keys 
console.log(Object.keys(aObject));
console.log(aMap.keys());
// values
console.log(Object.values(aObject));
console.log(aMap.values());
//

// ## 4. Build a Contact List Using Map

const contact = new Map();

contact.set(809851055, "senthur");
contact.set(984652254, "raji");
contact.set(454258755, "hulen");

console.log(contact);

contact.delete(454258755);

contact.get(809851055);
console.log(contact);

console.log(contact.set(9210,'sehh'));
console.log(contact);

console.log(contact.get(984652254));


// ## 5. Remove Duplicates from Array Using Set

const fruits = ["apple", "banana", "apple", "orange", "banana"];

const fruitsSet = new Set([...fruits])
console.log(fruitsSet);

const fruitsArr = Array.from(fruitsSet)
console.log(fruitsArr);


// ## 6. Track User Logins with Set

const login = new Map()

login.set("ui01", 'senthur')
login.set("ui02", 'dino')
login.set("ui03", "gopal");

login.forEach((vaules, keys) => {
    console.log(`${vaules} id : ${keys}`);
})

login.delete('ui02')
login.forEach((vaules, keys) => {
  console.log(`${vaules} id : ${keys}`);
});

console.log(`${login.get("ui01")} is loged in already`);

if(login.get("ui03") !== undefined) {
    console.log(`User is loged in already`);
} else {
    console.log(`User not found`);
}


// ## 7. Create a Map of Book Titles and Authors

const bookMap = new Map()

bookMap.set('Karukku', 'bama');
bookMap.set('Game', 'Manoj');
bookMap.set('Best Life', 'Senthur');
bookMap.set("Quit", "nithish");
bookMap.set("White night", "desvosky");

console.log(bookMap.entries());

bookMap.set("Game", 'Raji');
console.log(bookMap.entries());

console.log(`Book count: ${bookMap.size}`)


// ## 8. Associate Metadata with DOM Elements Using WeakMap

let p1 = document.createElement('p')

const weakMap = new WeakMap();
weakMap.set(p1, {visible : "hidden"}) ;
console.log(weakMap);

p1 = null
console.log(weakMap);


const map1 = new Map();
map1.set("Karukku", "bama");
console.log(map1);

map1.delete();
console.log(map1);


// ## 9. Track Instances of a Class with WeakSet
const active = new WeakSet()
class Session {
    constructor(userId) {
        this.user = userId;
        this.date = new Date().getTime();
        active.add(this)
    }
}

let u1 = new Session('senthur')
let u2 = new Session('fiji')

console.log(active.has(u2));

u2 = null;
console.log(active);
console.log(active.has(u2));


// ## 10. Build a Shopping Cart Using Map


const product = new Map()

product.set('p01', 1)
product.set('p02', 6)
product.set('p03', 3)
product.set("p04", 4);

console.log(product.values());

product.delete('p02')
console.log(product);

product.set("p01", 12);
console.log(product);
let total = 0;
product.forEach((value) => {
    total += value
})
console.log(`Total is ${total}`);


// ## 11. Anagram Checker with Set

function isAnagram(str1, str2) {

    str1 = str1.replace(/\s+/g, '').toLowerCase()
    str2 = str2.replace(/\s+/g, "").toLowerCase();

    if(str1.length !== str2.length) return false;
    
    let set1 = new Set(str1) 
    let s2 = new Set(str2); 
    
    if(set1.size !== s2.size) return false;

    const count = {};
    for(let char of str1) {
        count[char] = (count[char] || 0) + 1;
    }

    for (let char of str2) {
        if(!set1.has(char) || !count[char]) return false;
        count[char]--;
    }
    return true;
}

console.log(isAnagram("fds", "fsd"));


// ## 12. First Non-Repeating Character with Map

const countmap = new Map()

const setMap = new Set('thises')
// const setMap2 = new Set( "hello");

countmap.set('str', setMap)

const count1 = {};
let vals = countmap.values()
for (let char of setMap) {
  count1[char] = (count1[char] || 0) + 1;
  [char++];
}

console.log(countmap);
console.log(count1);

// // ## 13. Measure Performance: Object vs Map
// const ins = 100000;
// console.time('Object start')
// const speedObj = {}
//     for(let i = 0; i < ins; i++ ){
//         speedObj['key' + i] = i;
//     }

// console.timeEnd("Object start");

// console.time("Map start");

// const speedMap = new Map()

// for (let i = 0; i < ins; i++) {
//   speedMap.set("key" + i, i);
// }

// console.timeEnd("Map start");

// # 14. Voting App with Set to Prevent Duplicate Votes

const voterList = new Set(['jim', 'kim', 'pam', 'sam', 'tom', 'west', 'tom'])
voterList.add("holland");
voterList.delete('west')
voterList.forEach((keys) => {
    console.log(`${keys} is voted`);
}) 

// ## 15. Employee Registry Using Object Keys in Map

const emp1 = {id : 101, name : 'senthur'}
const emp2 = { id: 102, name: "dalmiya" };

const Emps = new Map()

Emps.set(emp1, {
    role : 'frontend dev',
    salary: 12000
})

Emps.set(emp2, {
  role: "backend dev",
  salary: 13000,
});

console.log(Emps.get(emp1));
console.log(Emps.get(emp2));
