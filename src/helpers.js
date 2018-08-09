const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [0, 4, 8],
  [6, 7, 2],
  [2, 5, 8]
];

const checkIfWon = (playerBoard) => {
  playerBoard.sort((a, b) => a - b);
  let isMatch = false;
  let win = false;

  for (let i = 0; i < possibleWins.length; i++) {
    let currBoard = possibleWins[i];

    if (isMatch) {
      win = true;
      break;
    }

    for (let j = 0; j < playerBoard.length; j++) {
      if (currBoard[j] === playerBoard[j]) {
        isMatch = true;  
      } else {
        isMatch = false;
        break;
      }
    }
  }

  return win;
}

export { checkIfWon }; 