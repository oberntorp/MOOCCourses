import * as actionTypes from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.payLoad.name,
                age: action.payLoad.age
            }
            return{
                persons: state.persons.concat(newPerson)
            };
        case actionTypes.DELETE_PERSON:
            return{
                persons: state.persons.filter(person => person.id !== action.idOfPersonToDelete)
            };
        default:
            break;
    }
    return state;
};

export default reducer;