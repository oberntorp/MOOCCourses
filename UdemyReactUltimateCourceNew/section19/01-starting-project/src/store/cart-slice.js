import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalQuantity: 0, changed: false };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    replaceCart(state, action) {
      console.log("replace cart:", action);
      state.items = action.payload.items;
      state.totalQuantity = action.payload.totalQuantity;
    },
    addProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      state.changed = true;

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
        });
      } else {
        existingItem.totalPrice += newItem.price;
        existingItem.quantity++;
      }
    },
    removeProduct(state, action) {
      state.changed = true;
      const existingItem = state.items.find(
        (item) => item.id === action.payload
      );
      state.totalQuantity--;

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        existingItem.quantity -= 1;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export const { replaceCart, addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
