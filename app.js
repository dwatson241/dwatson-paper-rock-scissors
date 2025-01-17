// GET COMPUTER CHOICE
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3) + 1;
  if (choice === 1) {
    return "paper";
  } else if (choice === 2) {
    return "rock";
  } else choice === 3;
  return "scissors";
}

// GET HUMAN CHOICE
function getHumanChoice() {
  let choice = prompt("Paper, Rock, or Scissors").toLowerCase(); // getHumanChoice INPUT CONVERTED TO LOWER CASE
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    return null; //
  }
}

// PLAY SINGLE ROUND
function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return null; // null = tie
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return 1; // victory
  } else {
    return -1; // loss
  }
}

// PLAY 5 ROUNDS
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    const humanChoice = getHumanChoice();

    if (!humanChoice) {
      console.log("Please enter paper, rock, or scissors");

      round--; // STOPS ROUND COUNTER FROM ADVANCING IF INPUT IS INVALID
      continue;
    }

    const computerChoice = getComputerChoice();
    console.log(`You chose: ${humanChoice}`); //DISPLAY humanCHOICE

    console.log(`The computer chose: ${computerChoice}`); // DISPLAYS computerChoice

    const result = playRound(humanChoice, computerChoice);

    if (result === null) {
      console.log("Draw! No points awarded.");
    } else if (result === 1) {
      console.log(`You won round! ${round}!`);
      humanScore++;
    } else if (result === -1) {
      console.log(`Computer won round ${round}!`);
      computerScore++;
    }
  }

  // PRINT GAME WINNER TO CONSOLE
  if (humanScore > computerScore) {
    console.log("You won! Play again? Refresh the page!");
  } else if (humanScore < computerScore) {
    console.log("You lose... refresh the page to play again!");
  } else {
    console.log("Draw! No winner. Play again? Refresh the page!");
  }
}

// PLAY GAME WITH BELOW
playGame();
