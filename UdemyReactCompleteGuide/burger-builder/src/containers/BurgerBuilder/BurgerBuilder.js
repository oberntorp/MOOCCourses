import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-config-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';
import { connect } from 'react-redux';

class BurgerBuilder extends Component{
    state = {
        isPurchasing: false,
        loading: false,
        error: false
    };

    componentDidMount(){
        console.log(this.props);
        // axios.get("https://myburger-c2c0f.firebaseio.com/ingredients.json").then(response => this.setState({ingredients: response.data}, error => {
        //     this.setState({loading: false})
        // })).catch(error => this.setState({error: true}));
    }

    setIsBurgerPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => ingredients[igKey]).reduce((sum, el) => sum + el, 0);

        return sum > 0;
    }

    purchaseHandler = () => {
        this.setState({isPurchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({isPurchasing: false});
    }

    continuePurchaseHandler = () => {
        this.props.history.replace("/checkout");
    }

    encodeIngredientsAndPrice = () =>{
        let ingredientsAndPrice = [];
        for(let i in this.state.ingredients){
            ingredientsAndPrice.push(`${encodeURIComponent(i)}=${encodeURIComponent(this.state.ingredients[i])}`);
        }

        ingredientsAndPrice.push(`totalPrice=${this.props.totalPrice}`)

        return ingredientsAndPrice;
    }

    render(){
        const disabledInfo = {
            ...this.props.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burgerRelated = (!this.state.error) ? <Spinner /> : <p>The ingredients was not loaded</p>;
        let orderSummary = null;

        if(this.props.ingredients){
            burgerRelated = (
            <Aux>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls orderd={this.purchaseHandler} purchasable={this.setIsBurgerPurchasable(this.props.ingredients)} price={this.props.totalPrice} ingeredientAdded={this.props.onAddIngredient} ingredientRemoved={this.props.onRemoveIngredient} disabled={disabledInfo} />
            </Aux>
            );

            orderSummary = <Spinner />;
        
            if(!this.state.loading){
                orderSummary = <OrderSummary price={this.props.totalPrice} purchaseContinue={this.continuePurchaseHandler} purchaseCancel={this.cancelPurchaseHandler} ingredients={this.props.ingredients}/>;
            }
        }
        return (
            <Aux>
                <Modal show={this.state.isPurchasing} modalClosed={this.cancelPurchaseHandler}>
                    {orderSummary}
                </Modal>
                {burgerRelated}
            </Aux>
        );
    }
}

const mapStateToProps = state =>{
    return{
        ingredients: state.ingredients,
        totalPrice: state.totalPrice
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onAddIngredient: (ingredientName) => dispatch({type: actionTypes.ADD_INGREDIENT, ingredientName: ingredientName}),
        onRemoveIngredient: (ingredientName) => dispatch({type: actionTypes.REMOVE_INGREDIENT, ingredientName: ingredientName})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));