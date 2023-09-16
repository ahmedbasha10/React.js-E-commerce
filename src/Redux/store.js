import { configureStore } from "@reduxjs/toolkit";
import CategoriesReducer from "./Slices/Categories-Slice";
import CartReducer from "./Slices/Cart-Slice";
import AuthReducer from "./Slices/Auth-Slice";
import { saveState, loadState } from "./localstorage";
import { isEqual } from "lodash";
import { productsApiSlice } from "./Slices/productsApi-slice";
import { authApiSlice } from "./Slices/AuthApi-Slice";

const statesNames = {
  CART_STATE: "cartState",
  AUTH_STATE: "authState",
};

// load states from localstorage
const cartInitialState = loadState(statesNames.CART_STATE);
const authInitialState = loadState(statesNames.AUTH_STATE);

export const store = configureStore({
  reducer: {
    categories: CategoriesReducer,
    cart: CartReducer,
    auth: AuthReducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
    [authApiSlice.reducerPath]: authApiSlice.reducer,
  },
  preloadedState: {
    cart: cartInitialState,
    auth: authInitialState,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(productsApiSlice.middleware)
      .concat(authApiSlice.middleware),
});

// if the state is changed save it to localstorage
store.subscribe(() => {
  const authState = store.getState().auth;
  saveState(authState, statesNames.AUTH_STATE);

  const cartState = store.getState().cart;
  if (!isEqual(cartState, cartInitialState)) {
    saveState(cartState, statesNames.CART_STATE);
  }
});
