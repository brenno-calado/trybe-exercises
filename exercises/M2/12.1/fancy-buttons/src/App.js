import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.sumClicks = this.sumClicks.bind(this);
    this.state = {
      totalClicksb1: 0,
      totalClicksb2: 0,
      totalClicksb3: 0,
    };
  }
  sumClicksOne() { 
    this.setState(({ totalClicksb1 }) => ({
      totalClicksb1: totalClicksb1 + 1,
    }));
  }

  sumClicksTwo() { 
    this.setState(({ totalClicksb2 }) => ({
      totalClicksb2: totalClicksb2 + 1,
    }));
  }

  sumClicksThree() { 
    this.setState(({ totalClicksb3 }) => ({
      totalClicksb3: totalClicksb3 + 1,
    }));
  }
  render() {
    return (
    <main className="App">
      <button id="1" type="button" onClick={this.sumClicksOne}>{this.state.totalClicksb1}</button>
      <button id="2" type="button" onClick={this.sumClicksTwo}>{this.state.totalClicksb2}</button>
      <button id="3" type="button" onClick={this.sumClicksThree}>{this.state.totalClicksb3}</button>
    </main>
    )
  };
}

export default App;
