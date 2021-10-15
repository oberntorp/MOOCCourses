import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0 };

const cartSlice = createSlice({
  name: "CartSlice",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItems = state.items.push(action.payload.item);
      const totalAmount =
        state.totalAmount + action.item.price * action.payload.item.quantity;
      return {
        items: newItems,
        totalAmount,
      };
    },
    removeProduct(state, action) {
      const newItems = state.items.filter((item) => item.id !== action.item.id);
      const totalAmount =
        state.totalAmount - action.item.price * action.item.quantity;

      return {
        items: newItems,
        totalAmount,
      };
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct } = cartSlice.actions;
