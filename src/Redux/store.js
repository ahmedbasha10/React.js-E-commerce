import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/Products-Slice";
import CategoriesReducer from "./Slices/Categories-Slice";
import CartReducer from "./Slices/Cart-Slice";
import AuthReducer from "./Slices/Auth-Slice";
import { saveState, loadState } from "./localstorage";
import { isEqual } from "lodash";

const statesNames = {
  PRODUCTS_STATE: "productsState",
  CART_STATE: "cartState",
  AUTH_STATE: "authState",
};

// load states from localstorage
const productsInitialState = loadState(statesNames.PRODUCTS_STATE);
const cartInitialState = loadState(statesNames.CART_STATE);
const authInitialState = loadState(statesNames.AUTH_STATE);

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: CategoriesReducer,
    cart: CartReducer,
    auth: AuthReducer,
  },
  preloadedState: {
    products: productsInitialState,
    categories: "",
    cart: cartInitialState,
    auth: authInitialState,
  },
});

// if the state is changed save it to localstorage
store.subscribe(() => {
  const authState = store.getState().auth;
  saveState(authState, statesNames.AUTH_STATE);

  const productsState = store.getState().products;
  if (!isEqual(productsState, productsInitialState)) {
    saveState(productsState, statesNames.PRODUCTS_STATE);
  }

  const cartState = store.getState().cart;
  if (!isEqual(cartState, cartInitialState)) {
    saveState(cartState, statesNames.CART_STATE);
  }
});
