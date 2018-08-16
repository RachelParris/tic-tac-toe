/**
 * ROWS         COLUMNS     DIAGNOLS
 * [0, 1, 2]    [0, 3, 6]   [0, 4, 8]
 * [3, 4, 5]    [1, 4, 7]   [2, 4, 6]
 * [6, 7, 8]    [2, 5, 8]
*/
const checkIfWon = (board, player) => {
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
  const char = player === 'player1' ? 'X' : 'O';
  let playerWin = false;

  for(var i = 0; i < wins.length; i++) {
    var index = wins[i];

    // Compares each character in the board to the player's character. If they ALL match then that player wins.
    if (board[index[0]] === char && board[index[1]] === char && board[index[2]] === char) {
      playerWin = true;
      break;
    }
  }
  return playerWin;
}

export { checkIfWon }; 