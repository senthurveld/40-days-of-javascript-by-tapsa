// let car =  {
//     isLuxuary :  true ? "yes luxuary" : "No"
// }
// console.log(car.isLuxuary.toWellFormed())

// const animal = {
//     eat : function () {
//         console.log('eats');

//     }
// }
// const dog = Object.create(animal)
// dog.eat()        // "eats"

/* 
Animal assigned to object with eat method then dog created by animal wth Object.cretae()
So dog can access eat bcoz animal is prototype of dog
animal     -->       dog
prototype  eat()     child
 */

// 2

// function Book(title, author) {
//   (this.title = title), (this.author = author);
//   this.getDetails = () => {
//     console.log(`${title} written by ${author}`);
//   };
// }
// const book1 = new Book("karukku", "bama");
// const book2 = new Book("1882", "well");
// book1.getDetails()
// book2.getDetails()

// const obj1 = {
//   name: "senthur",
//   age: 20,
//   log: () => {
//     console.log(obj1.name + obj1.age);
//   },
// };

// function Obj2(name, age) {
//   this.name = name, 
//   this.age = age
//   this.log = () => {
//     console.log(name + age);
//   }
// }

// const obj3 = Object.create({
//   name : "senthur",
//   age :  "21",
//   log : () => {
//     console.log(name , age);
//   }
// });

// obj1.log()
// // obj3.log(); 
// const obj2 = new Obj2('senthur', 21)
// obj2.log()

// obj3.log()

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     intro() {
//         console.log(`Hey i'm ${this.name}`);
//     }
// }

// class Student extends Person {
//   constructor(name, subject) {
//     super(name), (this.subject = subject);
//   }

//   intro1() {
//     console.log(`Hey i'm ${this.name} studing ${this.subject}`);
//   }
// }

// class GraduateStudent extends Student {
//   constructor(name, subject, year) {
//     super(name, subject), (this.year = year);
//   }

//   intro2() {
//     console.log(`Hey i'm ${this.name} graduated in ${this.subject} from ${this.year}`);
//   }
// }


// const gs = new GraduateStudent('senthur', 'js', 2025)
// const st = new Student('senthur', 'js')
// const ps = new Person("senthur");

// gs.intro2()
// st.intro1()
// ps.intro()
// gs.intro1();
// gs.intro();

