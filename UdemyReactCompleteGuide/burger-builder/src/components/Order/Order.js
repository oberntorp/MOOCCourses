import React from 'react';
import classes from './Order.module.css';

const order = (props) => {
    const ingredients = props.ingredients.map(ingredient => <span key={ingredient.name}>{ingredient.name} {ingredient.amount}</span>)
    return(<div className={classes.Order}>
        <p>Ingredients: {ingredients}</p>
        <p>Total Price: <strong>{`${props.price} sek`}</strong></p>
    </div>)
    }


export default order;