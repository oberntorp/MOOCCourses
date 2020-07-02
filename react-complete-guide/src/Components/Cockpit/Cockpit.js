import React from 'react';
import classes from './cockpit.css';

const cockpit = (props) =>
{
  let assignedClasses = [];

  if(props.persons.length <= 2){
    assignedClasses.push(classes.red);
  }

  if(props.persons.length <= 1){
    assignedClasses.push(classes.bold);
  }

  assignedClasses = assignedClasses.join(" ");

  let buttonClasses = "";

  if(props.showPersons){
      buttonClasses = classes.red;
  }

    return(
        <div className={classes.Cockpit}>
            <h1>Hi, I am a react app!</h1>
            <p className={assignedClasses}>It is working tjoho!</p>
            <button className={buttonClasses} onClick={props.clicked}>Show/Hide Persons</button>
        </div>
    );
}

export default cockpit;