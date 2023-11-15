function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  let randomChoice = Number(Math.round(Math.random() * 2));
  return choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
  rules = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  if (playerSelection.toLowerCase() === computerSelection) {
    return 2;
  }

  if (rules[playerSelection.toLowerCase()] === computerSelection) {
    return 1;
  } else {
    return -1;
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

function game() {
  let score = {
    player: 0,
    computer: 0,
  };

  for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Player's move: ");
    let computerChoice = getComputerChoice();
    let round = playRound(playerChoice, computerChoice);

    if (round == 2) {
      console.log("Draw!");
    } else if (round == 1) {
      console.log(
        `You Win! ${capitalize(playerChoice)} beats ${capitalize(
          computerChoice
        )}`
      );
      score["player"]++;
    } else {
      console.log(
        `You Lose! ${capitalize(computerChoice)} beats ${capitalize(
          playerChoice
        )}`
      );
      score["computer"]++;
    }
  }
  console.log(score);
}

game();
