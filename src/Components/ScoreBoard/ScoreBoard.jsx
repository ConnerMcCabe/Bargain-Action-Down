import React, {Component} from 'react';

class ScoreBoard extends Component {
  state =
  {
    items : [
      {name:"goldFish",price: 1},
      {name:"coffee" ,price: 5},
      {name:"cocktail",price : 7},
      {name:"lavaLamp",price : 8},
      {name:"sushi",price : 9},
      {name:"burrito",price : 10},
      {name:"iceCream" ,price: 12},
      {name:"cake" ,price: 15},
      {name:"turtle" ,price: 50},
      {name:"lego" ,price: 32},
      {name:"bounceHouse",price : 100},
      {name:"jumboGummyBear" ,price: 1000},]
  }
  render() {

    return (
      <div>
        <h1>Total Savings: ${this.props.total}</h1>
        {this.state.items.map(item=>(
        <h3 key={item}>You saved {`${Math.trunc(this.props.total/item.price)} ${item.name}s`}</h3>
      ))}
        </div>
    );
  }  
};

export default ScoreBoard