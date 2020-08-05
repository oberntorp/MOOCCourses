import React, { Component } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';

class Checkout extends Component{
    state = {
        ingredients: null,
        totalPrice: 0
    }

    componentWillMount(){
        this.decodeIngredientsAndPriceFromQuery()
    }

    decodeIngredientsAndPriceFromQuery = () => {
        const parameters = new URLSearchParams(this.props.location.search);
        let decodedIngredientsAndPrice = {};
        let totalPrice = 0;

        for(let param of parameters.entries()){
            if(param[0] !== "totalPrice"){
                decodedIngredientsAndPrice[param[0]] = Number(param[1]);
            } else {
                totalPrice = Number(param[1]);
            }
        }

        console.log(this.props, decodedIngredientsAndPrice);

        this.setState({ingredients: decodedIngredientsAndPrice, totalPrice: totalPrice});
    }


    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace(`${this.props.match.url}/contact-data`);
    }

    render(){
        return(
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelledHandler} checkoutContinued={this.checkoutContinuedHandler} />
                <Route path={`${this.props.match.url}/contact-data`} render={(props) => (<ContactData ingredients={this.state.ingredients} totalPrice={this.state.totalPrice} {...props} />)} />
            </div>
        );
    }
}

export default Checkout;