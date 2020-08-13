import React from 'react';
import NvaigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'; 

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NvaigationItem link="/">Burger Builder</NvaigationItem>
        <NvaigationItem link="/orders">Orders</NvaigationItem>
        <NvaigationItem link="/auth">Authenticate</NvaigationItem>
    </ul>
);

export default navigationItems;