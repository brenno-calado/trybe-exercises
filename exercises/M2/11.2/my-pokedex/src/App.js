import pokemons from './data';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  return (
    <div className="App">
        <PokemonList list={pokemons}/>
    </div>
  );
}

export default App;
