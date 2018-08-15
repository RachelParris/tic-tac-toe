import React, { Component } from 'react';
import Board from './components/Board';
import Form from './components/Form';
import Winner from './components/Winner';
import { checkIfWon } from './helpers';
// import blackPantherImg from './images/blackpanther.jpg';
// import clawImg from './images/claw.jpg';
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
      winner: '',
      showForm: true
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

    

    if (this.state.player1.name !== '' && this.state.player2.name !== '') {

      if (gameBoard[id] === '') {
        // Adds the selected square index num to the current player's board array
        playerBoard.push(parseInt(id));
    
        // Adds an 'X' or 'O' to the selected square index based on the current player
        char = currentPlayer === 'player1' ? 'X' : 'o';
        // char = <img class="player-img" src={char} alt={char} />;
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
      }
      
    }
    
    // Checks who won after a player has made 3 selections
    if (this.state[currentPlayer].board.length >= 2) {
      let isWon = checkIfWon(playerBoard);

      // Updates which player won by name
      let winner = isWon ? this.state[currentPlayer].name : '';
      console.log(winner)
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
    
    this.setState({
      showForm: false
    });
  }

  render() {
    return (
      <div className="center column">
        {this.state.showForm ? <Form 
          player1={this.state.player1}
          player2={this.state.player2}
          handleInputChange={this.handleInputChange} 
          handleFormSubmit={this.handleFormSubmit} /> : ''}
        {this.state.winner ? <Winner winner={this.state.winner} /> : ''}
        <Board 
          handleSelected={this.handleSelected} 
          board={this.state.gameBoard} />
      </div>
    );
  }
}

export default App;
