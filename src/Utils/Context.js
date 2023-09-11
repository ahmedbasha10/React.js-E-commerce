import React, { createContext, useContext, useState } from "react";

// Cart context to control showing cart from different components
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [showCart, setShowCart] = useState(false);

  return (
    <CartContext.Provider value={{ showCart, setShowCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};

// Search context to get value of search for any other component
const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};

// Notification context
const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");

  return (
    <NotificationContext.Provider
      value={{ showNotification, setShowNotification, notificationMessage, setNotificationMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
