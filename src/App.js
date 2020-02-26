import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <h1>This is my React Sandbox</h1>
        <Person name="Matthew" age="22" />
        <Person name="Emily" age="22" >My Hobbies: Complaining</Person>
        <Person name="Jax" age="4" />
      </div>
    );
  }
}

export default App;
