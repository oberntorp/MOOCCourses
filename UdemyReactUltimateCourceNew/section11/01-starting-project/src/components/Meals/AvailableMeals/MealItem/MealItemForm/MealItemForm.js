import { useRef, useState } from "react";
import Input from "../../../../UI/Input/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const inputConfiguration = {
    id: `amount_${props.id}`,
    type: "number",
    min: "1",
    max: "5",
    step: "1",
    defaultValue: "1",
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const amountAsNumber = Number(amountInputRef.current.value);
    if (
      amountInputRef.current.value.trim().length === 0 ||
      amountAsNumber < 0 ||
      amountAsNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amountAsNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input label="Amount" input={inputConfiguration} ref={amountInputRef} />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
