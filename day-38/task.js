// let user = {
//     name : 'me'
// }

// let profile = user

// profile = {
//     name : 'senthur'
// }

// console.log(user);
// console.log(profile);

function cycle(objA, objB) {
  objA.ref = objB;
  objB.ref = objA;

  objA.ref = null;
  objA.ref = null;
  return {
    A: objA,
    B: objB,
  };
}
const cycleIs = cycle({ salary: 200 }, { salary: 2200 });
console.log(cycleIs);

let newBtn = document.createElement("button");
newBtn.innerText = `button`;
newBtn.style.backgroundColor = "red";
document.body.appendChild(newBtn);

let myBtn = newBtn;
// myBtn = undefined;
// newBtn = undefined;
myBtn.addEventListener("click", () => {
    console.log('clicked');
    document.body.removeChild(myBtn)
});



