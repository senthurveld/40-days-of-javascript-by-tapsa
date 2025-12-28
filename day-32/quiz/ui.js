
import questions from "./questions.js";


const ui = document.getElementById("ques");

ui.innerHTML = questions.forEach(element => {
   setTimeout(() => {
    ui.append(element);
   },2000)
})

export default ui