import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './Header'
import Header from './Header';

function App() {
  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path='/home'>
            <h1>Welcome to home page</h1>
          </Route>
          <Route path='/login'>
            <h2>Login Page</h2>
          </Route>
          <Route path='/'>
            <Header />
            <h3>Default page</h3>
          </Route>
        </Switch>

      </div >
    </Router>
  )
}

export default App;
