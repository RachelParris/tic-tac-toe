/**
 * ROWS         COLUMNS     DIAGNOLS
 * [0, 1, 2]    [0, 3, 6]   [0, 4, 8]
 * [3, 4, 5]    [1, 4, 7]   [2, 4, 6]
 * [6, 7, 8]    [2, 5, 8]
*/

const checkRows = (board) => {
  const rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ];
  let char;

  loop1: for(var i = 0; i < rows.length; i++) {
    char = 'X';
    let char2;
    let win = false;
    loop2: for(var j = 0; j < board.length; i += 2) {
      if (board[j] !== char) {
        break loop1;
      } else if (char2 === board[j]) {
        
      }
    }
  }
};
let checkColumns;

const checkIfWon = (board) => {
  checkRows(board);
  // console.log(board);
  // Check diagnols
  const x = 'X';
  const o = 'O';
  // if ((board[0] === board[4] && board[0] === board[8]) || (board[2] === board[4] && board[2] === board[6]) ) {
  //   console.log('they all match!')
  // }
}



export { checkIfWon }; 