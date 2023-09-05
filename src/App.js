import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Home from "./Screens/HomeScreen/Home";
import ProductDetails from "./Screens/ProductDetailsScreen/ProductDetails";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetails />}/>
      </Routes>
    </div>
  );
}

export default App;
