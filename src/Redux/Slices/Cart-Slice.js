import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addItemToCart: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.push(action.payload);
      }
    },
    incrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        product.quantity += 1;
      } else {
        console.log("product not found");
      }
    },
    decrementQuantity: (state, action) => {
      const product = state.find((product) => product.id === action.payload);
      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
        }
      } else {
        console.log("product not found");
      }
    },
    deleteItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const {
  addItemToCart,
  incrementQuantity,
  decrementQuantity,
  deleteItem,
} = cartSlice.actions;
export default cartSlice.reducer;
