import { useContext, useEffect, useState } from "react";
import CartContext from "../../../../store/cart-context";
import CartIcon from "./CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [playBumpAnimation, setPlayBumpAnimation] = useState(false);
  const { items } = useContext(CartContext);
  const numberOfItemsInCart = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setPlayBumpAnimation(true);
    const timer = setTimeout(() => {
      setPlayBumpAnimation(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const btnClasses = `${classes.button} ${
    playBumpAnimation ? classes.bump : ""
  }`;
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
