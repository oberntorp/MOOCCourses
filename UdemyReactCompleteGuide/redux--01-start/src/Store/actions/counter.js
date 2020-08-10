import * as actionTypes from './actionTypes';

export const add = (valueToAdd) => {
    return{
        type: actionTypes.ADD,
        value: valueToAdd

    }
};

export const subtract = (valueToSubtract) => {
    return{
        type: actionTypes.SUBTRACT,
        value: valueToSubtract

    }
};

export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return{
        type: actionTypes.DECREMENT
    }
};