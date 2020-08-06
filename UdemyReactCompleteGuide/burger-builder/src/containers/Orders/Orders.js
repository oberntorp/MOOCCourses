import React, { Component } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-config-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
    state = {
        orders: [],
        loading: true
    }
    componentDidMount(){
        axios.get("/orders.json").then(response => {
            this.setState({loading: false, orders: this.retreiveOrdersFromResponseData(response.data)});
        }).catch(error => {
            this.setState({loading: false});
        });
    }

    retreiveOrdersFromResponseData = (responseData) => {
        let orders = [];
        for(let key in responseData){
            orders.push({
                ...responseData[key],
                id: key
            });
        }

        return this.convertIngredientsOfOrderIntoArray(orders);
    }

    convertIngredientsOfOrderIntoArray(orders) {
        for (let order of orders) {
            let transformedIngredients = [];
            for (let ingredientName in order.ingredients) {
                transformedIngredients.push({
                    name: ingredientName,
                    amount: order.ingredients[ingredientName]
                });
            }
            order.ingredients = transformedIngredients;
        }

        return orders;
    }

    render(){
        return(
            <div>
                {this.state.orders.map((order) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />)}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);