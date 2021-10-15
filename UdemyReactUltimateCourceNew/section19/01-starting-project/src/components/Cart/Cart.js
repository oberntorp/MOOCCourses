import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map((ci) => (
          <CartItem
            key={ci.id}
            item={{
              id: ci.id,
              title: ci.title,
              quantity: ci.quantity,
              total: ci.totalPrice,
              price: ci.price,
            }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
