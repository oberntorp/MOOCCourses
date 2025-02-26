import React, { Component } from 'react';
import { connect } from 'react-redux'
import Order from '../../components/Order/Order';
import axios from '../../axios-config-orders';
import * as actions from '../../store/actions/index';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component{

    componentDidMount(){
        this.props.onFetchOrders(this.props.token, this.props.userId);
    }

    render(){
        let orders = <Spinner />
        if(!this.props.loading && this.props.orders != null){
            orders = this.props.orders.map((order) => <Order key={order.id} ingredients={order.ingredients} price={order.price} />);

        }
        return(
            <div>
                {orders}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    };
};


const matchDispatchToProps = dispatch => {
    return{
        onFetchOrders: (token, userId) => dispatch(actions.fetchOrders(token, userId))
    }
}

export default connect(mapStateToProps, matchDispatchToProps)(withErrorHandler(Orders, axios));