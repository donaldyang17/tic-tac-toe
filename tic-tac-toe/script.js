let board = document.querySelectorAll("[data-cell");
let xPlayerTurn = "x";
let circlePlayerTurn = "circle";

let currentPlayerTurnCounter;

let cell = board.forEach(function (cell) {
  cell.addEventListener("click", placeMark, { once: true });
});

function placeMark(e) {
  let cell = e.target;
  let currentPlayerTurn = currentPlayerTurnCounter
    ? circlePlayerTurn
    : xPlayerTurn;
  placeMarkCurrentPlayer(cell, currentPlayerTurn);
  swapTurns();
}
function placeMarkCurrentPlayer(cell, currentPlayerTurn) {
  cell.classList.add(currentPlayerTurn);
}

function swapTurns() {
  currentPlayerTurnCounter = !currentPlayerTurnCounter;
}
