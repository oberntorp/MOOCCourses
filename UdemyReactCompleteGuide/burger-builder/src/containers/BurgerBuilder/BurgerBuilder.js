import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as burgerBuilderActions from '../../store/actions/index';
import axios from '../../axios-config-orders';
import { connect } from 'react-redux';

class BurgerBuilder extends Component{
    state = {
        isPurchasing: false
    };

    componentDidMount(){
        this.props.onInitIngredients();
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
        this.props.onInitPurchase();
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
        let burgerRelated = (!this.props.error) ? <Spinner /> : <p>The ingredients was not loaded</p>;

        let orderSummary = null; 
        
        if(this.props.ingredients){
            burgerRelated = (
            <Aux>
                <Burger ingredients={this.props.ingredients}/>
                <BuildControls orderd={this.purchaseHandler} purchasable={this.setIsBurgerPurchasable(this.props.ingredients)} price={this.props.totalPrice} ingeredientAdded={this.props.onAddIngredient} ingredientRemoved={this.props.onRemoveIngredient} disabled={disabledInfo} />
            </Aux>
            );
        
            orderSummary = <OrderSummary price={this.props.totalPrice} purchaseContinue={this.continuePurchaseHandler} purchaseCancel={this.cancelPurchaseHandler} ingredients={this.props.ingredients}/>;
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
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error
    };
};

const mapDispatchToProps = dispatch =>{
    return{
        onAddIngredient: (ingredientName) => dispatch(burgerBuilderActions.addIngredient(ingredientName)),
        onRemoveIngredient: (ingredientName) => dispatch(burgerBuilderActions.removeIngredient(ingredientName)),
        onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
        onInitPurchase: () => dispatch(burgerBuilderActions.purchaseInit())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));