const redux = require("redux");
const createStore = redux.createStore;

const initialState = {
    counter: 0
};

// Reducer
const rootReducer = (state = initialState, action) => {
    if(action.type === "INC_COUNTER"){
        return{
            ...state,
            counter: ++state.counter
        };
    }

    if(action.type === "ADD_COUNTER"){
        return{
            ...state,
            counter: state.counter + action.value
        };
    }
    return state;
};
// Store
const store = createStore(rootReducer);

// Subscription
store.subscribe(() => console.log("[Subscription for state changes]", store.getState()));

console.log(store.getState());
// Dispatching an Action
store.dispatch({type: "INC_COUNTER"});
store.dispatch({type: "ADD_COUNTER", value: 10}); // <- value could also be any name or any number of extra arguments,
                                                  // it could also be an object named payload, containing the information needed to update the state 
console.log(store.getState());