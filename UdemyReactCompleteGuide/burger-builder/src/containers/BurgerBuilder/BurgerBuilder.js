import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-config-orders';
import Loader from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 3.7,
    meat: 15
};

class BurgerBuilder extends Component{
    state = {
        ingredients:null,
        totalPrice: 2,
        isBurgerPurchasable: false,
        isPurchasing: false,
        loading: true,
        error: false
    };

    componentDidMount(){
        axios.get("https://myburger-c2c0f.firebaseio.com/ingredients.json").then(response => this.setState({ingredients: response.data}, error => {
            this.setState({loading: false})
        })).catch(error => this.setState({error: true}));
    }


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
        //alert("You continued");
        this.setState({loading: true})
        const orderData = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                fullName: "Oskar Berntorp",
                street: "ReactStreet 1",
                zipCode: "44596"
            },
            deliveryMethod: "inMailBox"
        };

        axios.post("/orders.json", orderData).then(response => this.setState({loading: false, isPurchasing: false})).catch(error => this.setState({loading: false, isPurchasing: false}));
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let burgerRelated = (!this.state.error) ? <Loader/> : <p>The ingredients was not loaded</p>;
        let orderSummary = null;

        if(this.state.ingredients){
            burgerRelated = (
            <Aux>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls orderd={this.purchaseHandler} purchasable={this.state.isBurgerPurchasable} price={this.state.totalPrice} ingeredientAdded={this.addIngredientHandler} ingredientRemoved={this.removeIngredientHandler} disabled={disabledInfo} />
            </Aux>
            );

            orderSummary = <Loader/>;
        
            if(!this.state.loading){
                orderSummary = <OrderSummary price={this.state.totalPrice} purchaseContinue={this.continuePurchaseHandler} purchaseCancel={this.cancelPurchaseHandler} ingredients={this.state.ingredients}/>;
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

export default withErrorHandler(BurgerBuilder, axios);