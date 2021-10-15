import { createSlice } from "@reduxjs/toolkit";

const initialState = { items: [], totalAmount: 0, totalQuantity: 0 };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      console.log(state.items);
      if (!existingItem) {
        state.items = state.items.push({
          id: newItem.id,
          title: newItem.title,
          totalPrice: newItem.price,
          price: newItem.price,
          quantity: 1,
        });
        state.totalAmount += action.price * action.payload.quantity;
        state.totalQuantity += 1;
      } else {
        existingItem.totalPrice += action.payload.price;
        existingItem.quantity++;
      }
    },
    removeProduct(state, action) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem.quantity === 1) {
        const newItems = state.items.filter(
          (item) => item.id !== action.item.id
        );
        state.totalAmount -= action.payload.price * action.item.quantity;
        state.items = newItems;
        state.totalQuantity--;
      } else {
        existingItem.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const { addProduct, removeProduct } = cartSlice.actions;
