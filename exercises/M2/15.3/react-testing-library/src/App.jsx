import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import NoMatch from './NoMatch';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </header>
    </div>
  );
}
