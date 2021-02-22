import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.printText = this.printText.bind(this);
  }
  printText() {
    console.log(this);
    console.log('some text');
  }
  render() {
    return (
    <main className="App">
      <button type="button" onClick={this.printText}>Click me, Senpai!</button>
    </main>
    )
  };
}

export default App;
