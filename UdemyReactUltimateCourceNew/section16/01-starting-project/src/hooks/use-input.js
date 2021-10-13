import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [enteredValueWasTouched, setEnteredValueWasTouched] = useState(false);

  const valueBlurHandler = () => {
    setEnteredValueWasTouched(true);
  };
  const valueChangeHandler = (event) => {
    setEnteredValueWasTouched(true);
    setEnteredValue(event.target.value.trim());
  };

  const reset = () => {
    setEnteredValue("");
    enteredValueWasTouched(false);
  };

  const enteredValueIsValid = validateValue(enteredValue);
  const hasError = !enteredValueIsValid && enteredValueWasTouched;

  return {
    value: enteredValue,
    isValid: enteredValueIsValid,
    hasError,
    valueBlurHandler,
    valueChangeHandler,
    reset,
  };
};

export default useInput;
