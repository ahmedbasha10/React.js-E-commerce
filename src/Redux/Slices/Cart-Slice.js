import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  initialState: {},
  name: "cartSlice",
  reducers: {
    addItemToCart: (state, action) => {
      const { userId, newProduct } = action.payload;
      // if user is not exist create new user
      if (!state[userId]) {
        state[userId] = [];
      }
      // get cart of user and search if the product exists
      const cart = state[userId];
      const existingProduct = cart.find((item) => item.id === newProduct.id);

      if (existingProduct) {
        existingProduct.quantity += newProduct.quantity;
      } else {
        cart.push(newProduct);
      }
    },
    incrementQuantity: (state, action) => {
      const { userId, productId } = action.payload;
      const cart = state[userId];

      const product = cart.find((product) => product.id === productId);
      if (product) {
        product.quantity += 1;
      } else {
        console.log("product not found");
      }
    },
    decrementQuantity: (state, action) => {
      const { userId, productId } = action.payload;
      const cart = state[userId];

      const product = cart.find((product) => product.id === productId);
      if (product) {
        if (product.quantity > 1) {
          // take care to not be less than 1
          product.quantity -= 1;
        }
      } else {
        console.log("product not found");
      }
    },
    deleteItem: (state, action) => {
      const { userId, productId } = action.payload;
      // remove product by its ID
      state[userId] = state[userId].filter(
        (product) => product.id !== productId
      );
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
