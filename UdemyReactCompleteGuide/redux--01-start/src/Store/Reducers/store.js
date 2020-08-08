import * as actionTypes from '../actions';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
            case actionTypes.STORE_RESULT:
                return{
                    ...state,
                    results: state.results.concat({id: new Date(), value: state.resultToStore})
                };
            case actionTypes.DELETE_RESULT:
                return{
                    ...state,
                    results: state.results.filter(x => x.id !== action.idToDelete)
                }
        default:
            break;
    }
    return state;
};

export default reducer;