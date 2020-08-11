import * as actionTypes from './actionTypes';
import axios from '../../axios-config-orders';

export const addIngredient = (ingredientName) => {
    return {
        type: actionTypes.ADD_INGREDIENT,
        ingredientName: ingredientName
    };
};

export const removeIngredient = (ingredientName) => {
    return {
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingredientName
    };
};

export const initIngredients = () => {
    return dispatch => {
        axios.get("https://myburger-c2c0f.firebaseio.com/ingredients.json").then(response => dispatch(setIngredients(response.data))).catch(error => {
            dispatch(fetchIngredientsFeiled());
        });
    };
};

export const fetchIngredientsFeiled = () => {
    return {
        type: actionTypes.FETCH_INGREDIENTS_FAILED
    };
};

export const setIngredients = (ingredients) => {
    return {
        type: actionTypes.SET_INGREDIENTS,
        ingredients: ingredients
    }
}