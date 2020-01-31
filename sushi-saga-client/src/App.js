import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  state = {
    allSushi: [],
    currentSushi: []
  }

  getSushis = () => {
    fetch(API).then(res => res.json())
    .then((json) => {
      this.setState({
        allSushi: json})}).then(() => this.getFourSushi())
  }

  getFourSushi = () => {
    let fourSushi = this.state.allSushi.splice(0, 4)
    this.setState({
      currentSushi: fourSushi
    })
  }

  handleClick = () => {
  //find plate, remove plate, 

  }



  componentDidMount() {
    this.getSushis();
  }

  render() {
    return (
      <div className="app">
        {console.log(this.state.currentSushi, "App:Render")}
        <SushiContainer fourSushi={this.state.currentSushi}  handleClick={this.handleClick} />
        <Table />
      </div>
    );
  }
}

export default App;