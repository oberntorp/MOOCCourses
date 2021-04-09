import * as actionTypes from './actionTypes';

export const purchaseBurgerSuccess = (id, orderData) => {
    return{
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const purchaseBurgerFailed = (error) => {
    return{
        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    };
};

export const purchaseBurger = (orderData, token) => {
    return {
        type: actionTypes.PURCHASE_BURGER,
        orderData: orderData,
        token: token
    }
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

export const fetchOrdersFailed = (error) => {
    return{
        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    };
};

export const fetchOrders = (token, userId) => {
    return {
        type: actionTypes.FETCH_ORDERS,
        token: token,
        userId: userId
    }
};

export const fetchOrdersStart = () => {
    return{
        type:actionTypes.FETCH_ORDERS_START
    };
};

