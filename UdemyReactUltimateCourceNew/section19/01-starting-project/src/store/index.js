import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-slice";
import cartSlice from "./cart-slice";

const store = configureStore({ reducer: { cart: cartSlice, ui: uiSlice } });

export { addProduct, removeProduct } from "./cart-slice";
export { toggle } from "./ui-slice";
export default store;
