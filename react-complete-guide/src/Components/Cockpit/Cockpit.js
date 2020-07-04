import React, {useEffect, useRef} from 'react';
import classes from './cockpit.css';

// This type of component that has no state in it is called a stateless, dumb or presentational component, this one is particularly made using a functional component
// A functional component not managing state is called s presentational component
const cockpit = (props) =>
{
  const toggleBtnRef = useRef(null);
  useEffect(() => {
    toggleBtnRef.current.click();
    // The equivalent of componnentDidUpdate/componnentDidMount hooks for functional components
    // To demonstrate that this can (both for done creating and updating) be problematic:
    setTimeout(() => alert("[Cockpit.js] Save data from cloud", 1000));
    return () => console.log("[Cockpit.js] clenup work") // <- equivalent to componentWillUnmount, runs before main functions of use effect and before first render cycle
  }, []); // <- to run as (componentDidUpdate) pass array with prop to watch, if the array is empty it will only run on componentDidMount
 
  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEffect");
    return () => console.log("[Cockpit.js] 2nd useEffect clenup work");
  });

  let assignedClasses = [];

  if(props.personsLength <= 2){
    assignedClasses.push(classes.red);
  }

  if(props.personsLength <= 1){
    assignedClasses.push(classes.bold);
  }

  assignedClasses = assignedClasses.join(" ");

  let buttonClasses = "";

  if(props.showPersons){
      buttonClasses = classes.Red;
  }

    return(
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses}>It is working tjoho!</p>
            <button ref={toggleBtnRef} className={buttonClasses} onClick={props.clicked}>Show/Hide Persons</button>
        </div>
    );
}

export default React.memo(cockpit);