import React from 'react';
import classes from './Person.css';
// This type of component that has no state in it is called a stateless, dumb or presentational component, this one is particularly made using a functional component
// A functional component not managing state is called s presentational component
const person = (props) => {
        return (
                <div className={classes.person}>
                        <p onClick={props.click}>I am {props.name}, and I am {props.age} years old!</p>
                        <p>{props.children}</p>
                        <input type="text" onChange={props.changed} value={props.name} />
                </div>
                )
}

export default person;