import * as actionTypes from '../actions/actionTypes';
import updateObject from '../../shared/utility';

const initialState = {
    ingredients: null,
    totalPrice: 2,
    error: false,
    building: false
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.9,
    cheese: 3.7,
    meat: 15
};

const addIngredient = (state, action) => {
    const updatedIngredients = updateObject(state.ingredients, {[action.ingredientName]: ++state.ingredients[action.ingredientName]});
    const updatedState =  {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }

    return updateObject(state, updatedState);
}; 

const removeIngredient = (state, action) => {
    const updatedIngredients = updateObject(state.ingredients, {[action.ingredientName]: --state.ingredients[action.ingredientName]});
    const updatedState =  {
        ingredients: updatedIngredients,
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
        building: true
    }

    return updateObject(state, updatedState);
}; 

const setIngredients = (state, action) => {
    return updateObject(state, {
        ingredients: action.ingredients,
        error: false,
        totalPrice: 2,
        building: false
    });
};

const fetchIngredientsFailed = (state, action) => updateObject(state, { error: true });

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return addIngredient(state, action);
        case actionTypes.REMOVE_INGREDIENT:
            return removeIngredient(state, action);
        case actionTypes.SET_INGREDIENTS:
            return setIngredients(state, action);
        case actionTypes.FETCH_INGREDIENTS_FAILED:
            return fetchIngredientsFailed(state, action);
        default:
            return state;
    }
}

export default reducer;
