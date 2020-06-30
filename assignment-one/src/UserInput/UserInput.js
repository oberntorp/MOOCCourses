import React from 'react';

const userInput = (props) =>
{
    const style = {
        font: "inherit",
        padding: "5px"
    };
    return(
        <div>
            <input type="text" style={style} onChange={props.changed} value={props.startingName}/>
        </div>
    )
}

export default userInput;