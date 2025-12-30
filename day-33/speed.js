// ## 13. Measure Performance: Object vs Map
const ins = 100000;

console.time("Object Insert");

const speedObj = {};
for (let i = 0; i < ins; i++) {
  speedObj["key" + i] = i;
}

console.timeEnd("Object Insert");

console.time("Map insert");

const speedMap = new Map();

for (let i = 0; i < ins; i++) {
  speedMap.set("key" + i, i);
}

console.timeEnd("Map insert");

const COUNT = 100000;

// -------- Object Test --------
console.time("Object Insert");

const obj = {};
for (let i = 0; i < COUNT; i++) {
  obj["key" + i] = i;
}

console.timeEnd("Object Insert");

// -------- Map Test --------
console.time("Map Insert");

const map = new Map();
for (let i = 0; i < COUNT; i++) {
  map.set("key" + i, i);
}

console.timeEnd("Map Insert");
