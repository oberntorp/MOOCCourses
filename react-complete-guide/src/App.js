import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app!</h1>
        <p>It is working tjoho!</p>
        <Person name="Oskar" age="28"/>
        <Person name="Eliot" age="28">My hobbies: Computers</Person>
        <Person name="Max" age="28"/>

      </div>
    );
  }
}

export default App;
