import * as actionTypes from './actionTypes';

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
    return {
       type: actionTypes.INIT_INGREDIENTS
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