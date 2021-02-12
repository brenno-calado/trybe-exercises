import data from './data';
import './App.css';
import PokemonList from './Pokemon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PokemonList list={data}/>
      </header>
    </div>
  );
}

export default App;
