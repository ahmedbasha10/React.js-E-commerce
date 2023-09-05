import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./Slices/Products-Slice";
import CategoriesReducer from "./Slices/Categories-Slice";
import { saveState, loadState } from "./localstorage";

const presistedState = loadState();
console.log(presistedState);
console.log("load state");

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
    categories: CategoriesReducer,
  },
  preloadedState: { products: presistedState, categories: "" },
});

store.subscribe(() => {
  console.log("b3ml save");
  console.log(store.getState().products);
  saveState(store.getState().products);
});
