import React from 'react';
import NvaigationItem from './NavigationItem/NavigationItem';
import classes from './NavigationItems.module.css'; 

const navigationItems = (props) => {
    
    const authDependentnavigationItem = (!props.isAuthenticated) ? <NvaigationItem link="/auth">Authenticate</NvaigationItem> : <NvaigationItem link="/logout">Logout</NvaigationItem>
    return(
    <ul className={classes.NavigationItems}>
        <NvaigationItem link="/">Burger Builder</NvaigationItem>
        { (props.isAuthenticated) ? <NvaigationItem link="/orders">Orders</NvaigationItem> : null}
        {authDependentnavigationItem}
    </ul>
)};

export default navigationItems;