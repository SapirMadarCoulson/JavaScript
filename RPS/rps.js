let computerSelection = ["rock", "paper", "scissors"];

function getComputerChoice(computerSelection) {
  return computerSelection[
    Math.floor(Math.random() * computerSelection.length)
  ];
}
function getPlayerChoice() {
  let playerSelection = prompt("Rock, Paper or Scissors: ");
  return playerSelection;
}

let computerScore = 0;
let playerScore = 0;

for (let i = 0; i < 5; i++) {
  let computerChoice = getComputerChoice(computerSelection);
  let playerChoice = getPlayerChoice().toLowerCase();
  console.log("this is what the player chose", playerChoice.toLowerCase());
  console.log("this is what the computer chose", computerChoice);
  if (computerChoice === computerSelection[0]) {
    if (playerChoice === computerSelection[1]) {
      console.log("Player wins!");
      playerScore++;
    } else if (playerChoice === computerSelection[2]) {
      console.log("Player loses, try again!");
      computerScore++;
    }
  }
  if (computerChoice === computerSelection[1]) {
    if (playerChoice === computerSelection[0]) {
      console.log("Player loses, try again!");
      computerScore++;
    } else if (playerChoice === computerSelection[2]) {
      console.log("Player wins!");
      playerScore++;
    }
  }
  if (computerChoice === computerSelection[2]) {
    if (playerChoice === computerSelection[0]) {
      console.log("Player wins!");
      playerScore++;
    } else if (playerChoice === computerSelection[1]) {
      console.log("Player loses, try again!");
      computerScore++;
    }
  }
  if (computerChoice === playerChoice) {
    console.log("It's a tie!");
  }
  console.log(`This is your score: ${playerScore}`);
  console.log(`This is the computer score: ${computerScore} `);
}
console.log(`This is your score: ${playerScore}`);
console.log(`This is the computer score: ${computerScore} `);
