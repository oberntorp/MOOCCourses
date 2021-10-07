import { useContext } from "react";
import CartContext from "../../../../store/cart-context";
import CartIcon from "./CartIcon/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const cartContext = useContext(CartContext);
  const numberOfItemsInCart = cartContext.items.reduce(
    (currentNumber, item) => {
      return currentNumber + item.amount;
    },
    0
  );
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfItemsInCart}</span>
    </button>
  );
};

export default HeaderCartButton;
