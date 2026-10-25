import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = pizzaId
      state.cart.splice(action.payload, 1);
    },
    increaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart[state.cart.findIndex(action.payload)];
      item.quantity++;
      item.totalPrice = item.quantity + item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload = pizzaId
      const item = state.cart[state.cart.findIndex(action.payload)];
      item.quantity--;
      item.totalPrice = item.quantity + item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  decreaseItemQuantity,
  increaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
