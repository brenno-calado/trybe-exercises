import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import VideoList from './components/VideoList';
import Video from './components/Video';
import NotFound from './components/NotFound';


function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1 className="App-header">TrybeTube</h1>
      </Link>
      <Switch>
        <Route exact path="/" component={ VideoList } />
        <Route path="/video/:id" component={ Video } />
        <Route component={ NotFound } />
      </Switch>
    </div>
  );
}

export default App;
