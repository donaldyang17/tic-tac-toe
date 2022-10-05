let board = document.querySelectorAll("[data-cell");
let xPlayerTurn = "x";
let circlePlayerTurn = "circle";
let win = document.querySelector(".winning-message");

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
    console.log(turnConverter());
  }
  swapTurns();
}

function placeMarkCurrentPlayer(cell, currentPlayerTurn) {
  cell.classList.add(currentPlayerTurn);
  console.log(cell.classList);
}

function swapTurns() {
  currentPlayerTurnCounter = !currentPlayerTurnCounter;
}

function turnConverter() {
  if (currentPlayerTurnCounter === false) {
    return circlePlayerTurn.toUpperCase();
  } else {
    return xPlayerTurn.toLocaleUpperCase();
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
  winningText.textContent = `Player ${turnConverter()} Wins!`;
}
