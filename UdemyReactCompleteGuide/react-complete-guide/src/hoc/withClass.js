import React from 'react';

// This way I will use now

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );

}

// This is one way of definiong a higherOrderComponent
//const withClass = (props) => (<div className={props.classes}>{props.children}</div>);

export default withClass;
