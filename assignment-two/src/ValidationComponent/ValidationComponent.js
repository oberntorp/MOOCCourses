import React from 'react';

const validationComponent = (props) =>
{
    let message = (props.textLength < 5) ? "The text is to short" : "The text is long enough";

    return(
        <p>{message}</p>
    );
}

export default validationComponent;