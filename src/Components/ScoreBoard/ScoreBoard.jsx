import React, {Component} from 'react';

class ScoreBoard extends Component {
  state =
  {
    items : [
      {name:"Gold Fishie",price: 1},
      {name:"Coffee" ,price: 5},
      {name:"Cocktail",price : 7},
      {name:"A Lava Lamp",price : 8},
      {name:"Gas station Sushi",price : 9},
      {name:"Burrito",price : 10},
      {name:"Ice Cream" ,price: 12},
      {name:"Cake" ,price: 15},
      {name:"Turtle" ,price: 50},
      {name:"Lego" ,price: 32},
      {name:"Bounce House",price : 100},
      {name:"JumboGummyBear" ,price: 1000},]
  }
  render() {

    return (
      <div class='score'>
        <h3>Total Savings: ${this.props.total}</h3>
        {this.state.items.map(item=>(
        <p key={item}>You saved {`${Math.trunc(this.props.total/item.price)} ${item.name}s`}</p>
      ))}
      </div>
    );
  }  
};

export default ScoreBoard