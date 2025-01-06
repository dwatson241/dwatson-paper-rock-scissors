
// console.log('hello world');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());


function getHumanChoice() {
  const choices = ["paper", "rock", "scissors"];
  prompt("paper, rock, or scissors?");
}
console.log(getHumanChoice())

function playRound(humanChoice, computerChoice) {
  humanChoice = prompt().toLowerCase
}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

