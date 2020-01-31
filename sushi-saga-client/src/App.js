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

  onSushiClick = () => {
    //onclick delete this sushi
    
  }

  componentDidMount() {
    this.getSushis();
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.currentSushi, "App:Render")}
        <SushiContainer fourSushi={this.state.currentSushi}  onGetFourSushi={this.getFourSushi}  onSushiClick={this.onSushiClick}/>
        <Table />
      </div>
    );
  }
}

export default App;