# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. What will be the output of the following code?

```js
try {
    let r = p + 50;
    console.log(r);
} catch (error) {
    console.log("An error occurred:", error.name);
}

// ReferenceError
```

- ReferenceError
- SyntaxError
- TypeError
- No error, it prints 10

## 2. Write a function processPayment(amount) that checks if the amount is positive and not exceeding balance. If any condition fails, throw appropriate errors
```js
function processPayment(amount) {
    try {
        if(amount <= 0 ){
            throw new Error("Amount is Invaild:");
        }
        return console.log(`${amount} is processed`)
    } catch (error) {
        console.error("Error:", error.message);
    }
}

processPayment(-1)
processPayment(10)
```

## 3. Implement a custom error handling system for an e-commerce website that categorizes errors as

- UserError
- PaymentError
- ServerError
- EmailError

```js
// UserError
function UserError(message) {
  this.name = "UserError";
  this.message = message;
}

function userValidation(name) {
  if (name === "" || name === undefined) {
    throw new UserError(`Name must be entered: You entered : ${name}`);
  }
  return `User name is ${name}`;
}
try {
  const message = userValidation("s");
  console.log(message);
} catch (error) {
  console.log(`${error.name}:${error.message} `);
}

// - PaymentError
function PaymentError(message) {
  this.name = "PaymentError";
  this.message = message;
}

function paymentWithTax(amount) {
  if (amount > 200) {
    let tax = amount + 20;
    throw new PaymentError(`Paying with Taxes:${amount} + 20 : ${tax}`);
  }
  return `Paying ${amount}`
}

try {
  const message = paymentWithTax(555);
  console.log(message);
} catch (error) {
      console.error(`${error.name}:${error.message} `);
}

// - ServerError
function ServerError(message) {
    this.name = "ServerError";
    this.message = message
} 

function checkServerIsOn(server) {
    if(server === "" || !server === NaN) {
        throw new ServerError("Enter vaild server name")
    }
    return `Server doing fine`
}

try {
    const serverSwitch = checkServerIsOn("sdfr")
    console.log(serverSwitch, message)
} catch (error) {
      console.log(`${error.name}:${error.message} `);

}
// - EmailError
function EmailVaild(message) {
    this.name = "EmailVaild";
    this.message = message
} 

function checkMail(mail) {
    if(!mail.includes("@")) {
        throw new EmailVaild("Enter vaild mail id", `You typed ${mail}`)
    }
    return `${mail} mail is vaild`
}

try {
    const vaildMail = checkMail("bad@mail.com")
    console.log(vaildMail);
} catch (error) {
      console.log(`${error.name}:${error.message} `);
}
```

## 4. Simulate an API call function fetchData(url). If the URL does not start with "https", throw an "Invalid URL" error. Handle it using try...catch
```js
function checkAPI(url) {
  if (!url.startsWith("https")) {
    throw new Error("Invalid URL");
  }
  console.log("Api is loaded");
  return `API is safe to use`;
}

try {
    let error1 = checkAPI("htstpsfg") 
    console.log(error1);
    
} catch (error) {
    console.error(`${error.name}: ${error.message}`)
    console.error(error)
}

```

## 5. Implement a custom error type ValidationError using constructor functions to handle form validation errors

<!-- Example: -->

```js
const userInput = { username: "", age: -2 };
validateUser(userInput);

// Output:
// ValidationError: Username cannot be empty
// ValidationError: Age must be a positive number
```

## 6. Write a function readFile(filePath) that simulates reading a file. If the file does not exist (simulate with a condition), throw a "File not found" error. Handle the error with try...catch. Make sure you have code to handle releasing the IO resources

Please note, you do not have to implement the actual IO operation here. Just use the console.log to simulate them.

## 7. Write a function parseJson(str) that takes a JSON string and tries to parse it using JSON.parse(). If parsing fails, catch the error and return "Invalid JSON"

## 8. What is the purpose of throw in JavaScript?

- It catches an error
- It stops the execution of a program
 ===> - It creates a new error manually
- It prints an error message

## 9. What does the finally block do in a try...catch statement?

- Runs only if an error occurs
- Runs only if no error occurs
  ===> - Runs regardless of whether an error occurs or not 
- Stops the execution of the script

## 10. Create a table exaplaining the usages of try, catch, throw, rethrow, error object

