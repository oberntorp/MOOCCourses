import React, {useEffect} from 'react';
import classes from './cockpit.css';

const cockpit = (props) =>
{
  useEffect(() => {
    "The equivalent of componnentDidUpdate/Mount hooks for functional components"
    // To demonstrate that this can (both for done creating and updating) be problematic:
    setTimeout(() => alert("UseEffect", 1000));
  }, [props.persons]); // <- to run as (componentDidUpdate) pass array with prop to watch, if the array is empty it will only run on componentdidupdate
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
            <h1>{props.title}</h1>
            <p className={assignedClasses}>It is working tjoho!</p>
            <button className={buttonClasses} onClick={props.clicked}>Show/Hide Persons</button>
        </div>
    );
}

export default cockpit;