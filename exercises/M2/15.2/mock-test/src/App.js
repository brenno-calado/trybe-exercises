// App.js
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      joke: '',
      nome: '',
      email: '',
    }
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.getJoke();
  }

  async getJoke() {
    const data = await fetch('https://icanhazdadjoke.com/', { headers: { Accept: 'application/json' } })
      .then((response) => response.json())
      .catch((error) => console.log(error));

    this.setState({ joke: data.joke });
  }

  handleInput(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value});
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div className='App' data-testid>
        {this.state.joke}
        <h1>Teste de inputs</h1>
        <label>
          Nome:
          <input
            onChange={this.handleInput}
            name='nome'
            value={nome}
            data-testid='name-input'
          />
        </label>
        <label>
          E-mail:
          <input
            onChange={this.handleInput}
            name='email'
            value={email}
            data-testid='email-input'
          />
        </label>
      </div>
    );
  }
}

export default App;