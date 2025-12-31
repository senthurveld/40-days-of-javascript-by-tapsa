// ## 1. Debounced Live Character Counter

// const txtArea = document.getElementById("textarea");
// const resulTxt = document.getElementById("result");

// function debounce(fn, delay) {
//   let timer;

//   return function (...args) {
//     clearTimeout(timer);

//     timer = setTimeout(() => {
//       fn.apply(this.args);
//     }, delay);
//   };
// }

// console.log(txtArea.value);

// const textCalc = debounce(() => {
//   const value = txtArea.value;
//   if(value.length <= 200) {
//     console.log(`Characters typed : ${value.length}`);
//     resulTxt.innerHTML = `Characters typed : ${value.length}`;
//   } else {
//     console.warn(`character count exceeds 200 => ${value.length}`);
//     resulTxt.innerHTML = `character count exceeds 200`;
//     setTimeout(() => {
//         resulTxt.innerHTML = ``;
//         txtArea.value = "Hi";
//     },3000)
//   }
// }, 800);

// txtArea.addEventListener("input", textCalc);

// Throttled Window Resize Logger

const view = document.getElementById('body')

// function throttle(func, interval) {
//   let lastTime = 0;

//   return function (...args) {
//     const now = Date.now();

//     if (now - lastTime >= interval) {
//       lastTime = now;
//       func.apply(this, args);
//     }
//   };
// }

function log() {
  console.log('click');
  
}
  console.log(view.classList);


view.addEventListener('click', log)
