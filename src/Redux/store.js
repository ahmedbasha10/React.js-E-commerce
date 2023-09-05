import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/Products-Slice";
import CategoriesReducer from "./Slices/Categories-Slice";
import CartReducer from "./Slices/Cart-Slice";
import { saveState, loadState } from "./localstorage";

const presistedState = loadState();

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: CategoriesReducer,
    cart: CartReducer,
  },
  preloadedState: {
    products: presistedState?.products,
    categories: "",
    cart: presistedState?.cart,
  },
});

store.subscribe(() => {
  saveState(store.getState());
});
