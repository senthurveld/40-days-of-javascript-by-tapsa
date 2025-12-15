const faq = document.querySelector(".fq");

faq.addEventListener("click", function (e) {
  if (e.target.classList.contains("ques")) {
    e.stopPropagation();

    const curItem = e.target.parentElement;
    const currentAnswer = curItem.querySelector(".answer");

    currentAnswer.classList.toggle("show");
  }
});

document.addEventListener("click", function () {
  const allAns = document.querySelectorAll(".answer.show");
  allAns.forEach(elem => elem.classList.remove("show"));
});
