import questions from "./questions.js";

const log = questions.forEach(element => {
   setTimeout(() => {
    console.log(element);
   },1000)
});

export default log;