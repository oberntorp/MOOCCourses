import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //   console.log("[Persons.js] getDerivedStateFromProps");
  //   return state;
  // }

  shouldComponentUpdate(nextProps, nextState){
    console.log("[Persons.js] shouldComponenetUpdate");
    // If this function is checking more than one prop, it is better to extend pure component that does this automatically
    return nextProps.persons !== this.props.persons; // This hook must return a boolean

  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return {message: "getSnapshotBeforeUpdate in Persons.js"};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("[Persons.js] componentDidUpdate");
    console.log(snapshot);
  }

  render(){
    console.log("[Persons.js] rendering...");
    return this.props.persons.map((p, i) => {
      return <Person key={p.id} name={p.name} age={p.age} changed={(event) => this.props.changed(event, p.id)} click={() => this.props.clicked(i)}/>
    });
  }

  componentWillUnmount(){
    console.log("[Persons.js] componentWillUnmount...");
  }
}
export default Persons;