import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 3.7,
    meat: 15
};

class BurgerBuilder extends Component{
    state = {
        ingredients:{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 2,
        isBurgerPurchasable: false,
        isPurchasing: false
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceForIngredient = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceForIngredient;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.setIsBurgerPurchasable(updatedIngredients);

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];

        if(oldCount <= 0){
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;

        const priceForIngredient = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice - priceForIngredient;

        this.setState({totalPrice: newPrice, ingredients: updatedIngredients});

        this.setIsBurgerPurchasable(updatedIngredients);
    }

    setIsBurgerPurchasable = (ingredients) => {
        const sum = Object.keys(ingredients).map(igKey => ingredients[igKey]).reduce((sum, el) => sum + el, 0);

        this.setState({isBurgerPurchasable: sum > 0});
    }

    purchaseHandler = () => {
        this.setState({isPurchasing: true});
    }

    cancelPurchaseHandler = () => {
        this.setState({isPurchasing: false});
    }

    continuePurchaseHandler = () => {
        alert("You continued");
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal show={this.state.isPurchasing} modalClosed={this.cancelPurchaseHandler}>
                    <OrderSummary price={this.state.totalPrice} purchaseContinue={this.continuePurchaseHandler} purchaseCancel={this.continuePurchaseHandler} ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls orderd={this.purchaseHandler} purchasable={this.state.isBurgerPurchasable} price={this.state.totalPrice} ingeredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} />
            </Aux>
        );
    }
}

export default BurgerBuilder;