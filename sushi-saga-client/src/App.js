import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    currentSushi: [],
    wallet: 100
  }

  getSushis = () => {
    fetch(API).then(res => res.json())
    .then((json) => {
      this.setState({
        allSushi: json})}).then(() => this.getFourSushi())
  }

  getFourSushi = () => {
    this.setState(prevState => {
      return {
        allSushi: prevState.allSushi.slice(4),
        currentSushi: prevState.allSushi.slice(0, 4)
      }
    })
  }

  onSushiClick = (eatenSushi) => {
    //onclick delete this sushi
    console.log(eatenSushi.price)
    if (eatenSushi.price > this.state.wallet ) {
        alert("You don't have enough money!")
    } else {
      this.setState({
        currentSushi: this.state.currentSushi.filter(sushi => sushi.id !== eatenSushi.id),
        wallet: this.state.wallet - eatenSushi.price
      })

    }

  }

  componentDidMount() {
    this.getSushis();
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.wallet)}
        <SushiContainer fourSushi={this.state.currentSushi}  onGetFourSushi={this.getFourSushi}  onSushiClick={this.onSushiClick}/>
        <Table  wallet={this.state.wallet} />
      </div>
    );
  }
}

export default App;

// {console.log(this.state.currentSushi, "App:Render")}
