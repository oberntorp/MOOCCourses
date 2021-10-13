import { useRef } from "react";
import { useState } from "react/cjs/react.development";
import classes from "./Checkout.module.css";

const isFiveChars = (value) => value.trim().length === 5;
const isEmpty = (value) => value.trim() === "";

const Checkout = (props) => {
  const [formFieldsValidity, setFormFieldsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const nameIsValid = !isEmpty(name);
    const streetIsValid = !isEmpty(street);
    const postalCodeIsValid = isFiveChars(postalCode);
    const cityIsValid = !isEmpty(city);

    setFormFieldsValidity({
      name: nameIsValid,
      street: streetIsValid,
      postalCode: postalCodeIsValid,
      city: cityIsValid,
    });

    let formIsValid =
      nameIsValid && streetIsValid && postalCodeIsValid && cityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({ name, street, postalCode, city });
  };

  const nameClasses = `${classes.control} ${
    formFieldsValidity.name ? "" : classes.invalid
  }`;

  const streetClasses = `${classes.control} ${
    formFieldsValidity.street ? "" : classes.invalid
  }`;

  const postalCodeClasses = `${classes.control} ${
    formFieldsValidity.postalCode ? "" : classes.invalid
  }`;

  const cityClasses = `${classes.control} ${
    formFieldsValidity.city ? "" : classes.invalid
  }`;
  return (
    <form className={classes.control} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!formFieldsValidity.name && <p>Please provide a valid name</p>}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!formFieldsValidity.street && <p>Please provide a valid street</p>}
      </div>
      <div className={postalCodeClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!formFieldsValidity.postalCode && (
          <p>Please provide a valid postal code</p>
        )}
      </div>
      <div className={cityClasses}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!formFieldsValidity.city && <p>Please provide a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
