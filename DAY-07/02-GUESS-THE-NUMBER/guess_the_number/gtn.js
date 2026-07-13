function guessTheNumber() {
  let userGuess;
  // keeps track of number of attempts
  let attempts = 0;

  console.log("Let's guess the Number!");
  console.log("Try to guess a number between 1 and 10!");

  // computer genrated number
  const computerGeneratedNumber = Math.floor(Math.random() * 10) + 1;

  do {
    userGuess = prompt("Enter your number between 1 and 10");
    attempts += 1;
    // console.log(userGuess);
    if (userGuess > computerGeneratedNumber) {
      console.log("Too high! Try again.");
    } else if (userGuess < computerGeneratedNumber) {
      console.log("Too Low! Try again.");
    } else {
      console.log(
        "Congrats! You guessed the number in " + attempts + " attempts",
      );
      attempts = 0;
      break;
    }
  } while (userGuess !== computerGeneratedNumber);

  const playAgainPrompt = prompt("Do you want to play again?");
  const playAgain = playAgainPrompt
    ? playAgainPrompt.toLocaleLowerCase()
    : "no";
  if (playAgain === "yes") {
    guessTheNumber();
  } else {
    console.log("Good bye! see you next time! ");
  }
}

guessTheNumber();
