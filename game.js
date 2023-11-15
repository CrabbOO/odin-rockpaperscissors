function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Number(Math.round(Math.random() * 2));
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  let playerChoice =
    playerSelection.charAt(0).toUpperCase() +
    playerSelection.slice(1).toLowerCase();
  let computerChoice =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);
  rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerChoice.toLowerCase() === computerChoice.toLowerCase()) {
    return 2;
  }

  if (rules[playerChoice.toLowerCase()] === computerChoice.toLowerCase()) {
    return 1;
  } else {
    return -1;
  }
}

function game() {
  let score = {
    player: 0,
    computer: 0,
  };

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Player's move: ");
    let computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    switch (playRound) {
      case 2:
        console.log("Draw!");
        score["player"]++;
        score["computer"]++;
        break;
      case 1:
        console.log(`You Win! ${playerChoice} beats ${computerChoice}`);
        score["player"]++;
        break;
      case -1:
        console.log(`You Lose! ${computerChoice} beats ${playerChoice}`);
        score["computer"]++;
        break;
    }
  }

  return score;
}

game();
