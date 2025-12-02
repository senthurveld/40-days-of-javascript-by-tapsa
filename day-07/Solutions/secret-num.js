console.log(`Enter a numver between 1 to 1`);
let MAX_NUMBER = 10;
let MIN_NUMBER = 1;

function guessNumber() {
  let attempts = 0;
  let guess = null;

  const secretNumber = Math.floor(Math.random() * 10) + 1;

  while (guess !== secretNumber) {
    const guessPrompt = prompt("Enter a number");
    guess = parseInt(guessPrompt);

    if (isNaN(guess) || guess > MAX_NUMBER || guess < MIN_NUMBER) {
      console.log("Enter a valid enter in range");
      continue;
    }

    attempts++;

    if (guess < secretNumber) {
      console.log("the number is too LOW");
    } else if (guess > secretNumber) {
      console.log("the number is too HIGH");
    } else {
      console.log(`Congrats!!! it took ${attempts}attempts`);
      break;
    }
  }
  const playAgainPrompt = prompt("Do you want to play again? (yes/no)");
  console.log(playAgainPrompt);
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";
  if (playAgain === "yes") {
    startSecretNumberGame();
  } else {
    console.log("Thanks for playing! See you next time.");
  }
}

guessNumber();
