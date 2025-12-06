

// const salad = new Array("banana", "apple", "orange", "grapes", "mango");
// salad.pop();
// salad.shift()
// console.log(salad);

// let favFoods = [1,2,3,4,5,6,7,8,9,10]
// console.log(favFoods.length);


const salad = new Array("banana", "apple", "orange", "grapes", "mango");

// salad.fill("nothing", 0, 1)
// console.log(salad);
// salad.fill("nothing", 2, 5)
// console.log(salad);

// salad.splice(2, salad.length, "papaya");
// console.log(salad);

// salad.splice(0, 1, "bananoo")
// console.log(salad);

// const salad1 = [1,2,3,[4,5,[6,[7]]]]
// console.log(salad1[3]?.[2]?.[2]);

// let nums = [1,2,3,4,5,6,7,8]
// console.log(nums.copyWithin(1,4,6));
// console.log(nums.copyWithin(0,2,3))

let emps = [
    {name : 'senthur', salary: 2000, dept: 'IT'},
    {name : 'dr', salary: 23000, dept: 'TAX'},
    {name : 'hidr', salary: 6000, dept: 'HR'},
    {name : 'asra', salary: 12000, dept: 'TAX'},
    {name : 'sam', salary: 5000, dept: 'IT'},
];

const sort = Object.groupBy(emps,({salary}) => {
    salary >= 5000 ? "Above 5000" : "Less 5000"
})
console.log(sort)


