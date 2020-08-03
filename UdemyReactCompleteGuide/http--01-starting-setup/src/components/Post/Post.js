import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post" onClick={props.clicked}>
        <h1>{props.title}</h1>
        <div className="Info">
        <div className="Author">{props.author}</div>
        </div>
    </article>
);

// There is a higher order component called withProps in react-router-dom,
// if passing on the router related props to a child component is needed
export default post;