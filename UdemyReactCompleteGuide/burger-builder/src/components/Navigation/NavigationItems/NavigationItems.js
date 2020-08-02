import React from 'react';
import NvaigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'; 

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NvaigationItem active link="/">Burger Builder</NvaigationItem>
        <NvaigationItem active link="/">Checkout</NvaigationItem>
    </ul>
);

export default navigationItems;