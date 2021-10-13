import { useReducer } from "react";

const initialState = { value: "", isTouched: false };

const inputReducer = (state, action) => {
  if (action.type === "INPUT") {
    return { value: action.value.trim(), isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: true };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  return { initialState };
};

const useInputBasic = (validator) => {
  // const [enteredValue, setEnteredValue] = useState("");
  // const [valueTouched, setValueTouched] = useState(false);

  const [state, dispatch] = useReducer(inputReducer, initialState);

  const valueChangedHandler = (event) => {
    // setEnteredValue(event.target.value.trim());
    dispatch({ type: "INPUT", value: event.target.value });
  };

  const valueBlurHandler = () => {
    // setValueTouched(true);
    dispatch({ type: "BLUR" });
  };

  const reset = () => {
    // setEnteredValue("");
    // setValueTouched(false);
    dispatch({ type: "RESET" });
  };

  const isValid = validator(state.value);
  const valueHasError = !validator(state.value) && state.isTouched;

  return {
    enteredValue: state.value,
    isValid,
    valueHasError,
    valueChangedHandler,
    valueBlurHandler,
    reset,
  };
};

export default useInputBasic;
