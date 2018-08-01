import React, { Component } from 'react';
import Board from './components/Board';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      player1: {
        name: 'Player 1',
        board: []
      },
      player2: {
        name2: 'Player 2',
        board: []
      },
      gameBoard: ['', '', '', '', '', '', '', '', ''],
      currentPlayer: 'player1',
      winner: ''
    };
  }

  handleSelected = (event) => {
    const id = event.target.id;
    const currentPlayer = this.state.currentPlayer;
    let nextCurrentPlayer;
    let char;

    const copyBoard = [...this.state[currentPlayer].board];
    copyBoard.push(parseInt(id));

    let copyGameBoard = [...this.state.gameBoard];

    char = currentPlayer === 'player1' ? 'O' : 'X';
    copyGameBoard[id] = char;

    nextCurrentPlayer = this.state.currentPlayer === 'player1' ? 'player2' : 'player1';

    this.setState({
      [currentPlayer]: {
        ...this.state[currentPlayer],
        board: copyBoard
      },
      gameBoard: copyGameBoard,
      currentPlayer: nextCurrentPlayer
    });

    if (this.state[currentPlayer].board.length >= 2) {
      this.checkIfWon();
    }
  }

  checkIfWon = () => {
    const currentPlayer = this.state.currentPlayer;
    let playerBoard = [...this.state[currentPlayer].board];
    playerBoard = playerBoard.sort(function(a, b) {
      return a - b;
    });
    console.log("sorted player board", playerBoard);
    var possibleWins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8]
    ];

    var isMatch = false;
    var win = false;

    for (var i = 0; i < possibleWins.length; i++) {
      var currArr = possibleWins[i]
      if (isMatch) {
        win = true;
        break;
      }
      for (var j = 0; j < playerBoard.length; j++) {
        if (currArr[j] === playerBoard[j]) {
          isMatch = true;  
        } else {
          isMatch = false;
          break;
        }
      }
    }

    if (win) {
      this.setState({ winner: currentPlayer });
    }
  }

  render() {
    var boardText = this.state.gameBoard.map(function (square) {
      return (
        <p>{square}</p>
      );
    })
    return (
      <div className="App">
        <Board 
          className="board" 
          handleSelected={this.handleSelected} text={boardText} />
      </div>
    );
  }
}

export default App;
