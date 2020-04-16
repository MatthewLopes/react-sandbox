import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [ personsState, setPersonsState ] = useState({
    persons: [
      { name: 'Matthew', age: 22 },
      { name: 'Emily', age: 22 },
      { name: 'Jax', age: 4 },
      { name: 'Josie', age: 1 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: 'Matt', age: 22 },
        { name: 'Emily', age: 22 },
        { name: 'Jax', age: 4 },
        { name: 'Josie', age: 1 }
      ]
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <h1>This is my React Sandbox</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} >My Hobbies: Complaining</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      <Person name={personsState.persons[3].name} age={personsState.persons[3].age} />
    </div>
  );
}

export default app;