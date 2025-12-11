console.log(`** Welcome to Expense Tracker Logs **`);

// // Expense tracker

// function createExpenseTracker(name,budget) {
//     let amount = budget;
//     console.log(name,budget);

//     return {
//         "addExpense" : (add) => {
//             amount = add + budget;
//             console.log(amount);
//         },
//         "removeExpense" : (remove) => {
//             amount =  amount -remove ;
//             console.log(amount);
//         },
//         "updateExpense" : (update) => {
//             amount = update;
//             console.log(amount);
//         },
//     }
// }
// const user = (createExpenseTracker('senhut', 200))
// user.addExpense(300);
// user.removeExpense(100)
// user.updateExpense(200);

function createExpenseTracker(name, budget) {
    console.log(`${name} budget is ${budget}`);

    function expense() {
    return {
        "addExpense" : (amount) => {
            return console.log(`${amount}`);
        }
    }
}
let new1 = expense()
new1.addExpense(324)

}


const user = createExpenseTracker("senthur", 5000);
