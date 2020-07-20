import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
const ingredientsOfBurger = Object.keys(props.ingredients).map(igKey => {
    return <li key={igKey}>{igKey}: <span style={{textTransform: "capitalize"}}>{props.ingredients[igKey]}</span></li>;
});
    return (
        <Aux>
            <h3>Your order</h3>
            <p>Your ordered burger has these ingredients:</p>
            <ul>
                {ingredientsOfBurger}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
}

export default orderSummary;