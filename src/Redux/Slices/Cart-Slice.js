import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: [],
  name: "cartSlice",
  reducers: {
    addItemToCart: (state, action) => {
      const product = state.find((product) => product.id === action.payload.id); // Find product if exist before
      if (product) {
        product.quantity += action.payload.quantity;    // increase its quantity if found
      } else {
        state.push(action.payload);   // add new product to the cart
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
        if (product.quantity > 1) {   // take care to not be less than 1
          product.quantity -= 1;
        }
      } else {
        console.log("product not found");
      }
    },
    deleteItem: (state, action) => {  // remove product by its ID
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
