import React from 'react';
import styled from 'styled-components';
import './Person.css';
// This type of component that has no state in it is called a stateless, dumb or presentational component, this one is particularly made using a functional component
const person = (props) => {
        const StyledDiv = styled.div`
        width: 60%;
        border: 1px solid blue;
        box-shadow: 2px 2px 5px darkblue;
        padding: 5px;
        margin: 5px auto;

        
`;
    return (
        <StyledDiv>
                <p onClick={props.click}>I am {props.name}, and I am {props.age} years old!</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name} />
        </StyledDiv>);
}

export default person;