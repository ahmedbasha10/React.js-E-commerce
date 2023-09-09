import { Navigate, Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Home from "./Screens/HomeScreen/Home";
import ProductDetails from "./Screens/ProductDetailsScreen/ProductDetails";
import Cart from "./Layout/Cart/Cart";
import { CartProvider } from "./Utils/Context";
import { SearchProvider } from "./Utils/Context";
import LoginSignup from "./Screens/Login-Signup/Login-Signup";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <div className="App">
          <NavbarComponent />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/product/:productId"
              element={
                <ProtectedRoute>
                  <ProductDetails />
                </ProtectedRoute>
              }
            />
            <Route path="/user" element={<LoginSignup />} />
            {/* hna hb2a a3ml r */}
            {/* <Route path="*" element={<Navigate to="/user" />} /> */}
          </Routes>
        </div>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
