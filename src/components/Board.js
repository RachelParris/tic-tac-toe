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
      <div className="container">
        <header>
            <div>{this.props.player1}</div>
            {this.props.winner ? <div>Winner: {this.props.winner}</div> : ''}
            <div>{this.props.player2}</div>
        </header>
        <div className="board">
          {board}
        </div>
      </div>
    );
  }
}

export default Board;
