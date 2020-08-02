import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';
import PropTypes from 'prop-types';

class OrderSummary extends Component {

    componentDidUpdate(){
        console.log("[OrderSummary] componentDidUpdate");
    }

    render() {
        const ingredientsOfBurger = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>{igKey}: <span style={{textTransform: "capitalize"}}>{this.props.ingredients[igKey]}</span></li>;
        });
        
        return (
            <Aux>
                <h3>Your order</h3>
                <p>Your ordered burger has these ingredients:</p>
                <ul>
                    {ingredientsOfBurger}
                </ul>
                <p><strong>Total price: {this.props.price}</strong></p>
                <p>Continue to checkout?</p>
                
                <Button btnType="Danger" clicked={this.props.purchaseCancel}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>Continue</Button>
            </Aux>
        );
    }
}

OrderSummary.propTypes = {
    price: PropTypes.number.isRequired,
    ingredients: PropTypes.object.isRequired,
    purchaseCancel: PropTypes.func.isRequired,
    purchaseContinue: PropTypes.func.isRequired

}

export default OrderSummary;