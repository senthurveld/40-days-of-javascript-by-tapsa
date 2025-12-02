function letsPlay() {
  console.log(
    "Getting Started With the Rock 🪨, Paper 🧻, or Scissors ✂️ Game"
  );

  let userChoiceIs = prompt("Enter your choice. Default is Rock ", "rock");
  let userChoice = userChoiceIs ? userChoiceIs.toLowerCase() : 'rock'

  let computerChoice;
  let randomNumber = Math.floor(Math.random() * 3) + 1;

  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scisor";
      break;
  }
  console.log("User Choice:  " + userChoice);
  console.log("Computer Choice:  " + computerChoice);

  if (
    (userChoice === "rock" && computerChoice === "scisor") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scisor" && computerChoice === "paper")
  ) {
    console.log("User WIN!!!");
  } else if (userChoice === computerChoice) {
    console.log("Its a TIE");
  } else if (
    (userChoice === "paper" && computerChoice === "scisor") ||
    (userChoice === "scisor" && computerChoice === "rock") ||
    (userChoice === "rock" && computerChoice === "paper")
  ) {
    console.log("Computer WIN!");
  } else {
    console.log("Enter Rock | Paper | Scisor only");
  }

  let playAgainIs = prompt("Are you want to play again", "yes");
  const playAgain = playAgainIs ? playAgainIs.toLocaleLowerCase() : "no";

  if (playAgain === "yes") {
    letsPlay();
  } else {
    console.log("See ya! Next Time");
  }
}

letsPlay();
