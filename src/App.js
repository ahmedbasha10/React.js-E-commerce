import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Home from "./Screens/HomeScreen/Home";
import ProductDetails from "./Screens/ProductDetailsScreen/ProductDetails";
import Cart from "./Layout/Cart/Cart";
import { CartProvider } from "./Layout/Cart/CartContext";

function App() {

  return (
    <CartProvider>
      <div className="App">
        <NavbarComponent />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
