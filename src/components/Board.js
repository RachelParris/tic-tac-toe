import React, { Component } from 'react';
import '../App.css';
class Board extends Component {
  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-3">
            <div id="0" className="square" onClick={this.props.handleSelected}>{this.props.text[0]}</div>
            <div id="1" className="square" onClick={this.props.handleSelected}>{this.props.text[1]}</div>
            <div id="2" className="square" onClick={this.props.handleSelected}>{this.props.text[2]}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="3" className="square" onClick={this.props.handleSelected}>{this.props.text[3]}</div>
            <div id="4" className="square" onClick={this.props.handleSelected}>{this.props.text[4]}</div>
            <div id="5" className="square" onClick={this.props.handleSelected}>{this.props.text[5]}</div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div id="6" className="square" onClick={this.props.handleSelected}>{this.props.text[6]}</div>
            <div id="7" className="square" onClick={this.props.handleSelected}>{this.props.text[7]}</div>
            <div id="8" className="square" onClick={this.props.handleSelected}>{this.props.text[8]}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
