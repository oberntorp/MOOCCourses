import React, { /*Component*/ useState } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// A state full, container or smart component is a component that manages state, either as a function (functional components) or class based components
const App = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: "p1", name: "Oskar", age: 28 },
      { id: "p2", name: "Eliot", age: 27 },
      { id: "p3", name: "Max", age: 28 }
    ],
    someOtherState: "Another state value",
    showPersons: false
  });

  const [otherState, setOtherState] = useState("Another state value");

  console.log(personsState, otherState);

  const deletePersonHandler = (indexOfPersonToDelete) =>
  {
    const currentPursons = [...personsState.persons];
    currentPursons.splice(indexOfPersonToDelete, 1);
    setPersonsState({
      persons: currentPursons,
      someOtherState: "Another state value",
      showPersons: true
    });
  }

  const changeNameHandler = (event, idOfPersonToCange) =>
  {
    const personIndex = personsState.persons.findIndex(p => p.id === idOfPersonToCange);
    const person = {
      ...personsState.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...personsState.persons];
    persons[personIndex] = person;

    setPersonsState({
      persons: persons,
      someOtherState: "Another state value",
      showPersons: true 
    });
  }

  const showPersonsHandler = () =>
  {
    const doesShowPersons = personsState.showPersons;
    setPersonsState({
        persons: personsState.persons,
        someOtherState: "Another state value",
        showPersons: !doesShowPersons 
      });
  }

  let persons = null;

  if(personsState.showPersons)
  {
    persons = (
      <div>
        <Persons persons={personsState.persons} clicked={deletePersonHandler} changed={changeNameHandler}/>
      </div>
    )
  }

  return (
    <div className={classes.App}>
      <Cockpit persons={personsState.persons} clicked={showPersonsHandler} showPersons={personsState.showPersons}/>
      {persons}
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