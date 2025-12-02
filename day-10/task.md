# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code and why?

```js
let user = "Alice";

function outer() {
  function inner() {
    console.log(user); //Bob - because it's from nearest scope
  }
  let user = "Bob";
  inner();
}
outer();
```

## 2. What is the mistake in the code below?

```js
let total = 0; // Global, bad practice

function add(num) {
  total += num;
}

add(5);
add(10);
console.log(total);

// I DON"T KNOW
```

## 3. Create a function with a nested function and log a variable from the parent function.

## 4. Use a loop inside a function and declare a variable inside the loop. Can you access it outside?

```js
// NO
function scope() {
  for (let i = 1; i <= 2; i++) {
    console.log(i);
  }
  console.log(i);
}
scope();
console.log(i);
```

## 5. Write a function that tries to access a variable declared inside another function.

```js
//Cant access it

function scope() {
  console.log(i);
  two();
}
function two() {
  let i = 20;
  console.log(i);
}
scope();
```

## 6. What will be the output and why?

```js
console.log(a);
let a = 10;
```

=> RefferenceError. Because a is let so a created only in memory. But not initailized before log.

## 7. Where is the `age` variable accessible?

```js
function showAge() {
  let age = 25;
  console.log(age);
}

console.log(age);
```

Options:

- A: In Global
- B: Only inside showAge
- C: It will cause an error => Age id not defined
- D: None of the above

## 8. What will be the output and explain the output?

```js
let message = "Hello";

function outer() {
  let message = "Hi";

  function inner() {
    console.log(message);
  }

  inner();
}

outer();

// => Hi.
// because nearest scope with variable or value.
// No other log statements
```

## 9. What will be the output and why?

```js
let x = "Global";

function outer() {
  let x = "Outer";

  function inner() {
    let x = "Inner";
    console.log(x);
  }

  inner();
}

outer();

//Inner is answer & Reason same as for 8 ques
```

## 10. What will be the output and why?

```js
function counter() {
  let count = 0;
  return function () {
    count--;
    console.log(count);
  };
}

const reduce = counter();
reduce();
reduce();

// -1 , -2
// invoke twos times every time count goes down with condition.
```
