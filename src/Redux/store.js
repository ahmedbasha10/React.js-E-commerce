import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/Products-Slice";
import CategoriesReducer from "./Slices/Categories-Slice";
import CartReducer from "./Slices/Cart-Slice";
import { saveState, loadState } from "./localstorage";
import { isEqual } from "lodash";

const statesNames = {
  PRODUCTS_STATE: "productsState",
  CART_STATE: "cartState",
};

const productsInitialState = loadState(statesNames.PRODUCTS_STATE);
const cartInitialState = loadState(statesNames.CART_STATE);

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: CategoriesReducer,
    cart: CartReducer,
  },
  preloadedState: {
    products: productsInitialState,
    categories: "",
    cart: cartInitialState,
  },
});

store.subscribe(() => {
  const productsState = store.getState().products;
  if (!isEqual(productsState, productsInitialState)) {
    console.log("products saving");
    saveState(productsState, statesNames.PRODUCTS_STATE);
  }

  const cartState = store.getState().cart;
  if (!isEqual(cartState, cartInitialState)) {
    console.log("cart saving");
    saveState(cartState, statesNames.CART_STATE);
  }
});
