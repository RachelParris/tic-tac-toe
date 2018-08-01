import React, { Component } from 'react';
import Board from './components/Board';
import Form from './components/Form';
import Winner from './components/Winner';
import { checkIfWon } from './helpers';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      player1: {
        name: '',
        board: []
      },
      player2: {
        name: '',
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
    // Makes a copy of the player's board
    const playerBoard = [...this.state[currentPlayer].board];
    // Makes a copy of the master game board
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

  handleInputChange = (event) => {
    let player;
    player = event.target.name === 'player1' ? 'player1' : 'player2';
    this.setState({
      [event.target.name]: {
        name: event.target.value,
        board: this.state[player].board
      }
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <Form 
          player1={this.state.player1}
          player2={this.state.player2}
          handleInputChange={this.handleInputChange} 
          handleFormSubmit={this.handleFormSubmit} />
        <Winner />
        <Board 
          className="board" 
          handleSelected={this.handleSelected} 
          board={this.state.gameBoard} />
      </div>
    );
  }
}

export default App;
