import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

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
            <p><strong>Total price: {props.price}</strong></p>
            <p>Continue to checkout?</p>
            
            <Button btnType="Danger" clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>Continue</Button>
        </Aux>
    );
}

export default orderSummary;