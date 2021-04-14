import React from 'react';
import './App.css';
import Pokedex from './Pokedex';
import pokemons from './data';

function App() {
  return (
    <main className="App">
      <h1>Pokedex</h1>
      <Pokedex pokemons={ pokemons }/>
    </main>
  );
}

export default App;
