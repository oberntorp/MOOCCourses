import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// A state full, container or smart component is a component that manages state, either as a function (functional components) or class based components
class App extends Component{
  state = {
    persons: [
      { id: "p1", name: "Oskar", age: 28 },
      { id: "p2", name: "Eliot", age: 27 },
      { id: "p3", name: "Max", age: 28 }
    ],
    someOtherState: "Another state value",
    showPersons: false
  };

  deletePersonHandler = (indexOfPersonToDelete) =>
  {
    const currentPursons = [...this.state.persons];
    currentPursons.splice(indexOfPersonToDelete, 1);
    this.setState({
      persons: currentPursons,
      someOtherState: "Another state value",
      showPersons: true
    });
  }

  changeNameHandler = (event, idOfPersonToCange) =>
  {
    const personIndex = this.state.persons.findIndex(p => p.id === idOfPersonToCange);
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons,
    });
  }

  showPersonsHandler = () =>
  {
    const doesShowPersons = this.state.showPersons;
    this.setState({
        showPersons: !doesShowPersons 
      });
  }

  render(){
    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.changeNameHandler}/>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} clicked={this.showPersonsHandler} showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
