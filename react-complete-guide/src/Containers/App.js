import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

// A state full, container or smart component is a component that manages state, either as a function (functional components) or class based components
class App extends Component{
  constructor(props){
    super(props);
    console.log("[App.js] constructor");
    this.state = {
      persons: [
        { id: "p1", name: "Oskar", age: 28 },
        { id: "p2", name: "Eliot", age: 27 },
        { id: "p3", name: "Max", age: 28 }
      ],
      someOtherState: "Another state value",
      showPersons: false
    };
  }

  static getDerivedStateFromProps(props, state){
    console.log("[App.js] getDerivedStateFromProps", state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[App.js] shouldComponenetUpdate");
    return true // This hook must return a boolean

  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[App.js] componentDidUpdate");
    console.log(snapshot);
  }

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

  componentDidMount(){
    console.log("[App.js] component did mount");
  }
  render(){
    console.log("[App.js] render");
    let persons = null;

    if(this.state.showPersons)
    {
      persons = (
          <Persons persons={this.state.persons} clicked={this.deletePersonHandler} changed={this.changeNameHandler}/>
      )
    }
    return (
      <div className={classes.App}>
        <Cockpit title={this.props.appTitle} persons={this.state.persons} clicked={this.showPersonsHandler} showPersons={this.state.showPersons}/>
        {persons}
      </div>
    );
  }
}

export default App;
