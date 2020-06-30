import React, { /*Component*/ useState } from 'react';
import './App.css';
import Person from './Person/Person';

// A state full, container or smart component is a component that manages state, either as a function (functional components) or class based components
const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Oskar", age: 28 },
      { name: "Eliot", age: 27 },
      { name: "Max", age: 28 }
    ],
    someOtherState: "Another state value"
  });

  const [otherState, setOtherState] = useState("Another state value");

  console.log(personsState, otherState);

  const switchNameHandler = (NewName) =>
  {
    setPersonsState({
      persons: [
        { name: NewName, age: 28 },
        { name: "Eliot", age: 27 },
        { name: "Maximilian", age: 29 }
      ]
    })
  }

  const changedNameHandler = (event) =>
  {
    setPersonsState({
      persons: [
        { name: "Oskar", age: 28 },
        { name: event.target.value, age: 27 },
        { name: "Maximilian", age: 29 }
      ]
    })
  }

  const btnStyle = {
    font: "inherit",
    border: "1px solid blue",
    padding: "4px",
    cursor: "pointer"
  };
  return (
    <div className="App">
      <h1>Hi, I am a react app!</h1>
      <p>It is working tjoho!</p>
      <button onClick={() => switchNameHandler("Oskar B")} style={btnStyle}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} click={switchNameHandler.bind(this, "Eliot !!!!")} changed={changedNameHandler}>My hobbies: Computers</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

    </div>
  );

}
/*
This is the preferrred way of creating components with state, old one

class App extends Component {
  state = {
    persons: [
      { name: "Oskar", age: 28 },
      { name: "Eliot", age: 27 },
      { name: "Max", age: 28 }
    ],
    someOtherState: "Another state value"
  };

  switchNameHandler = () =>
  {
    //console.log("switchNameHandler called!");
    // Changing state is not done like this: this.state.persons[0].name = "Oskar B";
    
    // Rather like this:
    this.setState({
      persons: [
        { name: "Oskar B", age: 28 },
        { name: "Eliot", age: 27 },
        { name: "Maximilian", age: 29 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app!</h1>
        <p>It is working tjoho!</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Computers</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>

      </div>
    );
  }
}*/

export default App;
