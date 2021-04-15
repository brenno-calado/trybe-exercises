import useTimer from './hooks/useTimer';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const { timer, randomNumber, isMultiple } = useTimer();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {timer}
        <br />
        {randomNumber}
        <br />
        {isMultiple ? 'Acerto' : ''}
      </header>
    </div>
  );
}

export default App;
