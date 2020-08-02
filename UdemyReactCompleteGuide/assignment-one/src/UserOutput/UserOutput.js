import React from 'react';
import './UserOutput.css';

const UserOutput = (props) =>
{
    return (
        <div className="userOutputContainer">        
            <p>{props.textOne}</p>
            <p>{props.userName}</p>
        </div>
    )
}

export default UserOutput;