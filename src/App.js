import { Route, Routes } from "react-router-dom";
import NavbarComponent from "./Components/Navbar/NavbarComponent";
import Home from "./Screens/HomeScreen/Home";
import ProductDetails from "./Screens/ProductDetailsScreen/ProductDetails";
import Cart from "./Layout/Cart/Cart";
import { useNotification } from "./Utils/Context";
import LoginSignup from "./Screens/Login-Signup/Login-Signup";
import "./App.css";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Notification from "./Components/Notification/Notification";

function App() {
  const { showNotification, setShowNotification, notificationMessage } =
    useNotification();
  return (
    <main className="App">
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
      </Routes>
      <Notification
        show={showNotification}
        message={notificationMessage}
        onClose={() => setShowNotification(false)}
      />
    </main>
  );
}

export default App;
