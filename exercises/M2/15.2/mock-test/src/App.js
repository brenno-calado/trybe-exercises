// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
    }
  }

  componentDidMount() {
    this.getJoke();
  }

  async getJoke() {
    const data = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
      .then((response) => response.json());

    this.setState({ joke: data.joke });
  }

  render() {
    return (
      <div className="App" data-testid>
        {this.state.joke}
      </div>
    );
  }
}

export default App;