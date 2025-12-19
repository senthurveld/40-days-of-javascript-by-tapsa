{
  function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
  }

  function tnx() {
    setTimeout(() => {
      console.log(`THank y'all`);
    }, 3000);
  }

  greet("senthur", tnx);
}

{
  function calculator(a, b, operationCallback) {
    if (operationCallback === add) {
      console.log(`${a} + ${b} = ${add(a, b)}`);
    } else {
      console.log(`${a} - ${b} = ${subtract(a, b)}`);
    }
    operationCallback();
  }

  function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }

  // Test calculator(5, 3, add);
  calculator(5, 3, add);
  calculator(5, 3, subtract);
  calculator(5, 11, subtract);
  calculator(52, 11, add);
}

{
  function delayedMessage(message, delay, callback) {
    setTimeout(() => {
      console.log(message);
    }, 2000);
    callback();
    console.log(delay);
  }

  delayedMessage("Task complete", 2000, () => console.log("Callback Fired!"));
}
{
  function filterNumbers(arr, conditionCallback) {
    let result = [];

    arr.forEach((element) => {
      if (conditionCallback(element)) {
        result.push(element);
      }
    });
    console.log(result);
  }

  filterNumbers([1, 2, 3, 4], (n) => n >= 2);
}

{
  function task1(callback) {
    console.log("Task 1 done");
    callback();
  }

  function task2(callback) {
    console.log("Task 2 done");
    callback();
  }

  function task3() {
    console.log("Task 3 done");
  }

  task1(() => {
    task2(() => {
      task3();
    });
  });
}
