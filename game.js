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

  if (playerSelection === computerSelection) {
    resField.append(roundDraw);
    return 2;
  }
  if (rules[playerSelection] === computerSelection) {
    resField.append(playerWin);
    score["player"]++;
    return 1;
  } else {
    resField.append(computerWin);
    score["computer"]++;
    return -1;
  }
}

// Scoreboard
let score = {
  player: 0,
  computer: 0,
};

// Nullifying scoreboard after 5 points
function checkScore() {
  if (score["player"] === 5) {
    resField.append(playerWinsGame);
    score.player = 0;
    score.computer = 0;
  } else if (score["computer"] === 5) {
    resField.append(computerWinsGame);
    score.player = 0;
    score.computer = 0;
  }
}

const resField = document.querySelector(".result");
const playerWinsGame = document.createElement("p");
const computerWinsGame = document.createElement("p");
const playerWin = document.createElement("p");
const computerWin = document.createElement("p");
const roundDraw = document.createElement("p");

playerWinsGame.textContent = "Player is victorious!";
computerWinsGame.textContent = "Computer is victorious!";
playerWin.textContent = "Player wins.";
computerWin.textContent = "Computer wins.";
roundDraw.textContent = "Draw.";

// Button selectors and listeners
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
  checkScore();
});
paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
  checkScore();
});
scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
  checkScore();
});
