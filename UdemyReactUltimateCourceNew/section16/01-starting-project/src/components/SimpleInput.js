import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameWasTouched, setEnteredNameWasTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameWasTouched;

  const nameBlurHandler = () => {
    setEnteredNameWasTouched(true);
  };
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value.trim());
  };
  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setEnteredNameWasTouched(true);
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredNameWasTouched(false);

    console.log(enteredName);

    /* When resetting an input fdield, it is better to use state than ref as refs do directly manipulating the DOM */
    // Ideal
    setEnteredName("");
    // Not ideal
    // nameInputRef.current.value = "";
  };
  const formClasses = nameInputIsInvalid
    ? "form-control invalid"
    : "form-control";
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={formClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
      </div>
      {nameInputIsInvalid && (
        <p className="error-text">Name must not be empty.</p>
      )}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
