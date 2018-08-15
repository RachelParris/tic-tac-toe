import React, { Component } from 'react';
import './Home.css';
import blackPanther from '../images/blackpanther.jpg';
import claw from '../images/claw.jpg';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <img src={blackPanther} />
          <img src={claw} />
        </div>
      </div>
    );
  }
}

export default Home;