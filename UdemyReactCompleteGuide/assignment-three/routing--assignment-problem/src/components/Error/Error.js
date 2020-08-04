import React from 'react';

const errorComponent = (props) => (
   <div>
    <h1>Pahe Not Found</h1>,
    <p>The route {`${props.location.pathname} was not found`}</p>
   </div>
);

export default errorComponent;

