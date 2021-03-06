import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxiliary';
import withClass from '../hoc/withClass';
import AuthContext from '../context/auth-context';

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
      showPersons: false,
      showCockpit: true,
      changeCounter: 0,
      authenticated: false
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

    // If I am to update a state and I am dependent on the previous state, this way should be used to avoid errors
    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter+1
      }
    });
  }

  showPersonsHandler = () =>
  {
    const doesShowPersons = this.state.showPersons;
    this.setState({
        showPersons: !doesShowPersons 
      });
  }

  loginHandler = () =>{
    this.setState({authenticated: true})
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
      <Aux>
        <button onClick={() => {
          this.setState({showCockpit: false});
      }}>Remove cockpit</button>
      <AuthContext.Provider value={{
        authenticated: this.state.authenticated,
        login: this.loginHandler
        }}>
      {this.state.showCockpit ?
         <Cockpit title={this.props.appTitle} personsLength={this.state.persons.length} clicked={this.showPersonsHandler} showPersons={this.state.showPersons}/> 
         : null}
         {persons}
      </AuthContext.Provider>
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
