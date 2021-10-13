import React, { useContext } from "react";

import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import classes from "./Cart.module.css";
import CartContext from "../../store/cart-context";
import { useState } from "react/cjs/react.development";
import Loader from "../UI/Loader";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubbmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const sendOrderToServer = (userData) => {
    setIsSubmitting(true);
    fetch("https://myreacthttp-default-rtdb.firebaseio.com/orders.json", {
      method: "POST",
      body: JSON.stringify({
        customerData: userData,
        orderData: cartCtx.items,
      }),
    }).then((result) => {
      setIsSubmitting(false);
      setDidSubmit(true);
      cartCtx.clearCart();
    });
  };

  const enableCheckoutModeHandler = () => {
    setIsCheckout(true);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const orderForm = (
    <Checkout onConfirm={sendOrderToServer} onCancel={props.onClose} />
  );
  const modalActions = (
    <div className={classes.actions}>
      <button className={classes["button--alt"]} onClick={props.onClose}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={enableCheckoutModeHandler}>
          Order
        </button>
      )}
    </div>
  );

  const orderModalContent = (
    <React.Fragment>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && orderForm}
      {!isCheckout && modalActions}
    </React.Fragment>
  );

  const submittingModalContent = <Loader />;

  const didSubmittContent = (
    <React.Fragment>
      <p>Your order was sent, thank you for shopping here!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close
        </button>
      </div>
    </React.Fragment>
  );

  return (
    <Modal onClose={props.onClose}>
      {!isSubbmitting && !didSubmit && orderModalContent}
      {isSubbmitting && submittingModalContent}
      {didSubmit && didSubmittContent}
    </Modal>
  );
};

export default Cart;
