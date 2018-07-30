import React, { Component } from 'react';
import '../App.css';
class Board extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div id="1" className="square" onClick={this.props.handleSelected}></div>
            <div id="2" className="square" onClick={this.props.handleSelected}></div>
            <div id="3" className="square" onClick={this.props.handleSelected}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="4" className="square" onClick={this.props.handleSelected}></div>
            <div id="5" className="square" onClick={this.props.handleSelected}></div>
            <div id="6" className="square" onClick={this.props.handleSelected}></div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="7" className="square" onClick={this.props.handleSelected}></div>
            <div id="8" className="square" onClick={this.props.handleSelected}></div>
            <div id="9" className="square" onClick={this.props.handleSelected}></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
