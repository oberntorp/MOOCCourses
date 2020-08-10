import * as actionTypes from './actionTypes';

export const deleteResult = (id) => {
    return{
        type: actionTypes.DELETE_RESULT,
        idToDelete: id

    }
};

export const storeResult = (result) => {
    // thunk lets me do this (run async code in my actions), apart from dispatch it does also give you the option of using getState. 
    // This is not to overuse, better to pass the data you need when dispatching your action
    return (dispatch, getState) => {
        setTimeout(() => {
            const oldCounter = getState().count.counter;
            console.log("OldCounter", oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

const saveResult = (result) => {
    const updatedResult = result * 2;
    return{
        type: actionTypes.STORE_RESULT,
        resultToStore: updatedResult

    }
};