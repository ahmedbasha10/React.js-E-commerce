import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => {
    return state.auth.token !== undefined && state.auth.token !== null;
  });
  console.log(isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/user" />;
};

export default ProtectedRoute;
