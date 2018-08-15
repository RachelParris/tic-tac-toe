import React, { Component } from 'react';
import './board.css';

class Board extends Component {
  render () {

    var board = this.props.board.map((square, index) => {
      return (
        <span
          key={index}
          id={index}
          className={"square s" + index}
          onClick={this.props.handleSelected}>
          {square}
        </span>
      )
    });

    return (
      <div className="board">
        {board}
      </div>
    );
  }
}

export default Board;
