import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const controls = [
    {label: "Salad", type: "salad"},
    {label: "Bacon", type: "bacon"},
    {label: "Cheese", type: "cheese"},
    {label: "Meat", type: "meat"}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Price <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(control => <BuildControl added={() => props.ingeredientAdded(control.type)} removed={() => props.ingredientRemoved(control.type)} key={control.label} label={control.label} disabled={props.disabled[control.type]}/>)}
        <button onClick={props.orderd} disabled={!props.purchasable} className={classes.OrderButton}>Order Now</button>
    </div>
);

export default buildControls;