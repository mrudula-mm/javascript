const boxes = Array.from(document.getElementsByClassName('cell'));
const resetBtn = document.getElementById('resetButton');
const startBtn = document.getElementById('startButton');
// eslint-disable-next-line no-use-before-define
resetBtn.addEventListener('click', reset);
const headerText = document.getElementById('header_text');
const player1Input = document.getElementById('player1');
const player2Input = document.getElementById('player2');
const cells = [null, null, null, null, null, null, null, null, null];
const oValue = 'o';
const xValue = 'x';
let currentPlayer = oValue;
let winnerIds = [];

let movements = 0;
let gameStarted = false;
function bindClickEvent() {
  boxes.forEach((cell) => {
    // eslint-disable-next-line no-use-before-define
    cell.addEventListener('click', boxClickFunction);
  });
}

function boxClickFunction(e) {
  if (!gameStarted || winnerIds.length > 0 || cells[e.target.id]) {
    return;
  }
  const ids = e.target.id;
  if (!cells[ids]) {
    cells[ids] = currentPlayer;
    e.target.innerHTML = currentPlayer;
    movements += 1;

    // eslint-disable-next-line no-use-before-define
    if (hasPlayerWon(currentPlayer)) {
      const winnerName = currentPlayer === oValue ? player1Input.value : player2Input.value;
      headerText.innerHTML = `${winnerName} has won!!`;
    } else if (movements === 9) {
      headerText.innerHTML = 'tie!!';
    } else {
      currentPlayer = currentPlayer === oValue ? xValue : oValue;
    }
  }
}

// eslint-disable-next-line consistent-return
function hasPlayerWon() {
  if (cells[1] === currentPlayer && cells[2] === currentPlayer && cells[0] === currentPlayer) {
    winnerIds = [0, 1, 2];
    return true;
  }
  if (cells[3] === currentPlayer && cells[6] === currentPlayer && cells[0] === currentPlayer) {
    winnerIds = [0, 3, 6];
    return true;
  }
  if (cells[4] === currentPlayer && cells[8] === currentPlayer && cells[0] === currentPlayer) {
    winnerIds = [0, 4, 8];
    return true;
  }
  if (cells[1] === currentPlayer && cells[7] === currentPlayer && cells[4] === currentPlayer) {
    winnerIds = [4, 1, 7];
    return true;
  }
  if (cells[2] === currentPlayer && cells[6] === currentPlayer && cells[4] === currentPlayer) {
    winnerIds = [4, 2, 6];
    return true;
  }
  if (cells[3] === currentPlayer && cells[5] === currentPlayer && cells[4] === currentPlayer) {
    winnerIds = [4, 3, 5];
    return true;
  }
  if (cells[7] === currentPlayer && cells[6] === currentPlayer && cells[8] === currentPlayer) {
    winnerIds = [8, 7, 6];
    return true;
  }
  if (cells[5] === currentPlayer && cells[2] === currentPlayer && cells[8] === currentPlayer) {
    winnerIds = [8, 5, 2];
    return true;
  }
}

function reset() {
  winnerIds = [];
  cells.forEach((val, index) => {
    cells[index] = null;
  });
  boxes.forEach((cell) => {
    // eslint-disable-next-line no-param-reassign
    cell.innerHTML = '';
  });
  headerText.innerHTML = 'Start Game!!';
  currentPlayer = oValue;
  movements = 0;
  gameStarted = false;
}
startBtn.addEventListener('click', () => {
  if (player1Input.value && player2Input.value) {
    bindClickEvent();
    gameStarted = true;
  } else {
    // eslint-disable-next-line no-alert
    alert('Please enter names of players..!!');
  }
});
