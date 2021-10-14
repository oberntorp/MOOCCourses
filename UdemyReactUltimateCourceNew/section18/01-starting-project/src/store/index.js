import { createStore } from "redux";
import * as actions from "./actions/index";

const initialState = { counter: 0 };

const reducer = (state = initialState, action) => {
  if (action.type === actions.INCREMENT) {
    return { counter: state.counter + 1 };
  }

  if (action.type === actions.INCREASE) {
    return { counter: state.counter + action.amount };
  }

  if (action.type === actions.DECREMENT) {
    return { counter: state.counter - 1 };
  }
  return state;
};

const store = createStore(reducer);

export default store;
