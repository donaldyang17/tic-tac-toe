let board = document.querySelectorAll("[data-cell");
let xPlayerTurn = "x";
let circlePlayerTurn = "circle";
let win = document.querySelector(".winning-message");
let restartButton = document.querySelector("button");

let winCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let turnCounter = 0;
let currentPlayerTurnCounter = xPlayerTurn;

let cell = board.forEach(function (cell) {
  cell.addEventListener("click", placeMark, { once: true });
});

function placeMark(e) {
  let cell = e.target;
  let currentPlayerTurn = currentPlayerTurnCounter
    ? xPlayerTurn
    : circlePlayerTurn;
  placeMarkCurrentPlayer(cell, currentPlayerTurn);
  if (checkPlayerWin(currentPlayerTurn)) {
    endGame(win);
  } else if (turnCounter < 8) {
    turnCounter++;
    console.log(turnCounter);
  } else {
    endGame(win);
  }
  swapTurns();
}

function placeMarkCurrentPlayer(cell, currentPlayerTurn) {
  cell.classList.add(currentPlayerTurn);
}

function swapTurns() {
  currentPlayerTurnCounter = !currentPlayerTurnCounter;
}

function turnConverter() {
  if (turnCounter === 8) {
    return "It's a tie!";
  }
  if (currentPlayerTurnCounter === false) {
    return `Player ${circlePlayerTurn.toUpperCase()} Wins!`;
  } else {
    return `Player ${xPlayerTurn.toLocaleUpperCase()} Wins!`;
  }
}
function checkPlayerWin(currentPlayerTurn) {
  return winCondition.some(function (combination) {
    return combination.every(function (index) {
      return board[index].classList.contains(currentPlayerTurn);
    });
  });
}

function endGame(win) {
  let winningText = document.querySelector(".data-winning-message-text");
  win.classList.add("show");
  winningText.textContent = `${turnConverter()}`;
}

function restartGame() {
  window.location.reload();
}

restartButton.addEventListener("click", restartGame);
