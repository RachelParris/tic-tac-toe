/**
 * ROWS         COLUMNS     DIAGNOLS
 * [0, 1, 2]    [0, 3, 6]   [0, 4, 8]
 * [3, 4, 5]    [1, 4, 7]   [2, 4, 6]
 * [6, 7, 8]    [2, 5, 8]
*/
const checkIfWon = (board, player) => {
  let char = player === 'player1' ? 'X' : 'O';
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  let playerWin = false;
  for(var i = 0; i < wins.length; i++) {
    var index = wins[i] // [0, 1, 2];

    if (board[index[0]] === char && board[index[1]] === char && board[index[2]] === char) {
      playerWin = true;
      break;
    }
  }
  console.log(playerWin)
}

export { checkIfWon }; 