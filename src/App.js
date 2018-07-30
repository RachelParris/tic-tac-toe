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
      },
    };
  }

  handleSelected = (event) => {
    const id = event.target.id;
    // console.log('Selected!', id);

    const copyBoard = [...this.state.player1.board];
    copyBoard.push(parseInt(id));

    this.setState({
      player1: {
        ...this.state.player1,
        board: copyBoard
      }
    });
    console.log(this.state.player1);

    console.log('board length: ', this.state.player1.board.length)
    if (this.state.player1.board.length > 2) {
      this.checkIfWon();
    }
  }

  checkIfWon = () => {
    console.log('triggered')
    let copyBoard = [...this.state.player1.board];
    copyBoard = copyBoard.sort(function(a, b) {
      return a - b;
    });
    console.log(copyBoard);
    var win = [1, 2, 3];

  }

  render() {
    return (
      <div className="App">
        <Board 
          className="board" 
          handleSelected={this.handleSelected} />
      </div>
    );
  }
}

export default App;
