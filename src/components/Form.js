import React, { Component } from 'react';
import '../App.css';
import './form.css';

class Form extends Component {
  render () {
    return (
      <form className="center" onSubmit={this.props.handleFormSubmit}>
        <input 
          type="text" 
          name="player1" 
          value={this.props.player1.name} 
          onChange={this.props.handleInputChange} 
          placholder="Player 1 name" />
        <input 
          type="text" 
          name="player2" 
          value={this.props.player2.name} 
          onChange={this.props.handleInputChange} 
          placholder="Player 2 name" />
        <input type="submit" value="Update Player Names" />
      </form>
    );
  }
}

export default Form;