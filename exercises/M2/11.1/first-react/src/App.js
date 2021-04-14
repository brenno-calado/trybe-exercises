import './App.css';
import HelloWorld from './helloWorld';
import MyName from './component';

const taskList = ['arrumar casa', 'trabalhar', 'estudar', 'limpar carro'];

const task = (list => list.map(value => <li>{value}</li>));

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <MyName />
      <ul>{task(taskList)}</ul>
    </div>
  )
}

export default App;
