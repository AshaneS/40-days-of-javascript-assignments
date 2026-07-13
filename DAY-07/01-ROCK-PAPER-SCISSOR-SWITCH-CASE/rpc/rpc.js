function rockPaperScissorsGame() {
  console.log("Getting Started with Rock Paper Scissors Game");

  const userChoisePrompt = prompt("Enter Rock, Paper, Scissor");
  let userChoise = userChoisePrompt.toLowerCase();

  // computers selection
  let computerChoise;
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  // if (randomNumber === 1) {
  //   computerChoise = "rock";
  // } else if (randomNumber == 2) {
  //   computerChoise = "paper";
  // } else {
  //   computerChoise = "scissors";
  // }

  // using switch case
  switch (randomNumber) {
    case 1:
      computerChoise = "rock";
      break;
    case 2:
      computerChoise = "papper";
      break;
    case 3:
      computerChoise = "scissors";
      break;
  }

  console.log("user - ", userChoise);
  console.log("computer - ", computerChoise);

  if (
    (userChoise === "rock" && computerChoise === "scissors") ||
    (userChoise === "paper" && computerChoise === "rock") ||
    (userChoise === "scissors" && computerChoise === "paper")
  ) {
    console.log("you Won!");
  } else if (userChoise === computerChoise) {
    console.log("The game is a tie!");
  } else if (
    (userChoise === "scissors" && computerChoise === "rock") ||
    (userChoise === "rock" && computerChoise === "paper") ||
    (userChoise === "paper" && computerChoise === "scissors")
  ) {
    console.log("computer Won!");
  } else {
    console.log("Invalid Input");
  }

  const playAgainPrompt = prompt("Do you want to play again?");

  const playAgain = playAgainPrompt ? playAgainPrompt.toLowerCase() : "no";

  if (playAgain === "yes") {
    rockPaperScissorsGame();
  } else {
    console.log("Thanks for playing. see you soon!");
  }
}

rockPaperScissorsGame();
