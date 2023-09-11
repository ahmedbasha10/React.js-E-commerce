import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import {
  CartProvider,
  NotificationProvider,
  SearchProvider,
} from "./Utils/Context";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <CartProvider>
        <SearchProvider>
          <NotificationProvider>
            <App />
          </NotificationProvider>
        </SearchProvider>
      </CartProvider>
    </BrowserRouter>
  </Provider>
);
