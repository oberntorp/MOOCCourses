import { useReducer } from "react";
import CartContext from "./cart-context";

const initialCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM_FROM_CART") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    const indexExistingItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[indexExistingItem];
    let updatedItems;
    if (existingItem) {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[indexExistingItem] = updatedItem;
      console.log("UpdatedItems", updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === "REMOVE_ITEM_FROM_CART") {
    const indexExistingItem = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[indexExistingItem];

    const updatedTotalAmount = state.totalAmount - existingItem.price;

    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[indexExistingItem] = updatedItem;
    }
    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  return initialCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(
    cartReducer,
    initialCartState
  );
  const removeItemFromCartHandler = (id) => {
    dispatchCartState({ type: "REMOVE_ITEM_FROM_CART", id: id });
  };
  const addItemToCartHandler = (item) => {
    dispatchCartState({ type: "ADD_ITEM_FROM_CART", item: item });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
