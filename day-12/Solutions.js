// const user = { name: "Alex", age: undefined };
// console.log(user.age ?? "Not provided");

// const obj = Object.freeze({ a: 1 });
// obj.a = 2;
// console.log(obj.a);

// const person = {
//   name: "Tapas",
//   company: {
//     name: "tapaScript",
//     location: {
//       city: "Bangalore",
//       zip: "94107"
//     }
//   }
// };

// const {name, company: {name : companyName} ,company: {location :{city,zip}}} = person;
// console.log(person);
// console.log(name);
// console.log(companyName);
// console.log(location);
// console.log(city);
// console.log(zip);

// const students = [
//   {
//     name: "senthur",
//     age: 20,
//     grades: 90,
//   },
//   {
//     name: "nithish",
//     age: 21,
//     grades: 78,
//   },
//   {
//     name: "raj",
//     age: 12,
//     grades: 66,
//   },
// ];

// let avg = 0
// for ({ grades } of students) {

//     avg += grades
// }
// console.log(avg / students.length)

// function bookStore(name, count) {
//     return {
//         name,
//         count,
//         restore : () => {
//             if(count===0){
//                 count++;
//                 return;
//             }
//         }
//     };
// }
// const book1 = bookStore("kaala", 2);
// const book2 = bookStore("vikram", 5);
// let book3 = bookStore("leo", 0);

// console.log(book2)
// console.log(book3)



// const person = { name: "John" };
// const newPerson = person;
// newPerson.name = "Doe";
// console.log(person.name);

// console.log(Object.hasOwn(newPerson, "name" ||  person, "name"));


const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];

for (let {name, address, age} of users) {
    console.log(name,address,age);
}

