# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output and why?

```js
const user = { name: "Alex", age: undefined };
console.log(user.age ?? "Not provided");

//Not provided
//Because Nulliesh coalescing opertor used in undefined area
```

## 2. What will happen if we try to modify a frozen object?

```js
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);

// 1 >> nothing will happen when modify frozen objects
```

## 3. Given an object with deeply nested properties, extract name, company, and address.city using destructuring

```js
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};

const {name, company: {name : companyName} ,company: {location :{city,zip}}} = person;
console.log(person);
console.log(name);
console.log(companyName);
console.log(location);
console.log(city);
console.log(zip);
```

## 4. Build a Student Management System

- Store student details in an object (name, age, grades).
- Implement a method to calculate the average grade.

``` js
const students = [
  {
    name: "senthur",
    age: 20,
    grades: 90,
  },
  {
    name: "nithish",
    age: 21,
    grades: 78,
  },
  {
    name: "raj",
    age: 12,
    grades: 66,
  },
];

let avg = 0
for ({ grades } of students) {

    avg += grades
}
console.log(avg / students.length)

```

## 5. Book Store Inventory System

- Store books in an object.
- Add functionality to check availability and restock books.

``` js


```

## 6. What is the difference between Object.keys() and Object.entries()? Explain with examples

## 7. How do you check if an object has a certain property?

console.log(Object.hasOwn(emp.name));

## 8. What will be the output and why?

```js
const person = { name: "John" };
const newPerson = person;
newPerson.name = "Doe";
console.log(person.name);

// Doe
```

## 9. What’s the best way to deeply copy a nested object? Expalin with examples
structuredClone

because assign or other methods copy but in nested objects these only copy reference 
of nested obj. So the value change to new objects.
structured will create new copy of that objects so accesss dynamically.

## 10. Loop and print values using Object destructuiring

```js
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
```
