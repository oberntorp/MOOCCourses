import React from 'react';

const charComponent = (props) =>
{
    const style = {
        display: "inline-block",
        padding: "4px",
        border: "1px solid grey",
        boxShadow: "1px 3px 3px silver",
        fontSize: "30px",
        color: "blue"
    }
    return(
        <div style={style} onClick={props.click}>
            <p>{props.letter}</p>
        </div>
    );
}

export default charComponent;