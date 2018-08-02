import React, { Component } from 'react';
import '../App.css';
class Board extends Component {
  render () {

    var board = this.props.board.map((square, index) => {
      return (
        <span
          key={index}
          id={index}
          className="square"
          onClick={this.props.handleSelected}>
          {square}
        </span>
      )
    });

    return (
      <div className="wrapper">
        {board}
      </div>
    );
  }
}

export default Board;
