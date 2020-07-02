import React from 'react';
import './Person.css';
// This type of component that has no state in it is called a stateless, dumb or presentational component, this one is particularly made using a functional component
const person = (props) => {
    const personStyle = {
        "@media (min-width: 500px)":{
                width: "450px"
        }
    };
    return (
        <div className="person" style={personStyle}>
                <p onClick={props.click}>I am {props.name}, and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
        </div>)
}

export default person;