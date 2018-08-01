import React, { Component } from 'react';
import Board from './components/Board';
import { checkIfWon } from './helpers';
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
    const playerBoard = [...this.state[currentPlayer].board];
    let gameBoard = [...this.state.gameBoard];
    let nextCurrentPlayer;
    let char;

    // Adds the selected square index num to the current player's board array
    playerBoard.push(parseInt(id));

    // Adds an 'X' or 'O' to the selected square index based on the current player
    char = currentPlayer === 'player1' ? 'O' : 'X';
    gameBoard[id] = char;

    // Switches to the next player
    nextCurrentPlayer = this.state.currentPlayer === 'player1' ? 'player2' : 'player1';

    // Updates state
    this.setState({
      [currentPlayer]: {
        ...this.state[currentPlayer],
        board: playerBoard
      },
      gameBoard: gameBoard,
      currentPlayer: nextCurrentPlayer
    });

    // Checks who won after a player has made 3 selections
    if (this.state[currentPlayer].board.length >= 2) {
      let isWon = checkIfWon(currentPlayer, playerBoard);
      let winner = isWon ? currentPlayer : '';

      this.setState({ winner });
    }
  }

  render() {
    return (
      <div className="App">
        <Board 
          className="board" 
          handleSelected={this.handleSelected} board={this.state.gameBoard} />
      </div>
    );
  }
}

export default App;
