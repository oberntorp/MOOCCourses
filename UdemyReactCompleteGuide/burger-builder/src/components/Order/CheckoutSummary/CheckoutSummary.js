import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import classes from './CheckoutSummary.module.css';

const checkoutSummary = (props) => {
    return(
        <div className={classes.CheckoutSummary}>
            <h1>I hope it tastes well!</h1>
            <div className={classes.BurgerDisplay}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success">Continue</Button>
        </div>
    );
}

export default checkoutSummary;