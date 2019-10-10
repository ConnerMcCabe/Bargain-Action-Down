import React, {Component} from 'react';

class ScoreBoard extends Component {

  render() {

    return (
      <div>
        <h1>Total Savings: S{this.props.total}</h1>
      </div>
    );
  }  
};

export default ScoreBoard