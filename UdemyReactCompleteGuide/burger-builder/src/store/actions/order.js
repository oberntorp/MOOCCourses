import * as actionTypes from './actionTypes';
import axios from '../../axios-config-orders';

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailed = (errorMessage) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: errorMessage
    };
};

export const purchaseBurger = (orderData) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post("/orders.json", orderData).then(response => {
            dispatch(purchaseBurgerSuccess(response.data.name, orderData));
        }).catch(error => this.setState({loading: false}));
    };
};

export const purchaseBurgerStart = () => {
    return{
        type: actionTypes.PURCHASE_BURGER_START
    }
};

export const purchaseInit = () => {
    return{
        type: actionTypes.PURCHASE_INIT
    };
};

export const fetchOrdersSuccess = (orders) => {
    return{
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders
    };
};

export const fetchOrdersFailed = (errorMessage) => {
    return{
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: errorMessage
    };
};

export const fetchOrders = () => {
    return dispatch => {
        dispatch(fetchOrdersStart())
        axios.get("/orders.json").then(response => {
            let orders = [];
            for(let key in response.data){
                orders.push({
                    ...response.data[key],
                    id: key
                });
            }

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
            dispatch(fetchOrdersSuccess(orders))
        }).catch(error => {
            dispatch(fetchOrdersFailed(error));
        });
    };
};

export const fetchOrdersStart = () => {
    return{
        type:actionTypes.FETCH_ORDERS_START
    };
};
