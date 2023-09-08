import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Home from "./Screens/HomeScreen/Home";
import ProductDetails from "./Screens/ProductDetailsScreen/ProductDetails";
import Cart from "./Layout/Cart/Cart";
import { CartProvider } from "./Utils/Context";
import { SearchProvider } from "./Utils/Context";
import LoginSignup from "./Screens/Login-Signup/Login-Signup";
import "./App.css";

function App() {
  return (
    <CartProvider>
      <SearchProvider>
        <div className="App">
          <NavbarComponent />
          <Cart />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:productId" element={<ProductDetails />} />
            <Route path="/user" element={<LoginSignup />} />
          </Routes>
        </div>
      </SearchProvider>
    </CartProvider>
  );
}

export default App;
