# Tasks

Please complete the following tasks and post them on the tapaScript Discord under "40 Days of JavaScript".

> **DO NOT USE AI to FIND ANSWERS**. If you are stuck, let's discuss it on DISCORD and learn. Also, please note that none of the answers need you to create any UI. Just focus on the logic building and print the output on the browser console.

## 1. Draw the Execution Context Diagram of the follwoing code and share as explained below:

```js
const message = "I can do it";

function sum(a, b) {
  const result = a + b;
  return result;
}

function mul(a, b) {
  const result = a * b;
  return result;
}
function calc(a, b) {
  return (sum(a, b) + mul(a, b)) / 2;
}

function getResult(a, b) {
  return calc(a, b);
}

getResult(8, 5);
```

- Create the GEC and FEC with CP and EP flow
- Create the Stack and Heap Flow
- Create the Stack Diagram
- Create a Readme file with all the above diagram and share on Discord.

Create the GEC and FEC with CP and EP flow
```
    GEC:
        CP:
            -message: undefined;
            -sum() in memory
            -mul() in m..
            -calc() in m..
            -getResult() in m
        EP:
            -message: "I can do it";
                FEC:getResult()
                    CP:
                        -getResult(a,b):undefined
                        -calc() undefined
                    EP:
                        -getResult(8,5)
                        -calc(a,b)
                            FEC: calc()
                                CP:
                                    -sum() undefined
                                    -mul() undefined
                                EP:
                                    -sum(a,b) +
                                    -mul(a,b) /2
                                        FEP: sum(), mul()
                                        CP:
                                            -result: undefined
                                        EP:
                                            -result(a+b);
                                            -result(a*b);

```
