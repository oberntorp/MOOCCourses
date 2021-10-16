import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity += 1;
      state.totalAmount += newItem.price * newItem.quantity;

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

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
