import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import ShopCart from "./components/ShopCart";
import Navbar from "./components/Navbar/Navbar";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import SearchContextProvider from "./context/SearchContextProvider";

//validate
import Login from "./components/FormValidate/Login";
import SignUp from "./components/FormValidate/SignUp";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <SearchContextProvider>
          <Navbar />
          <Routes>
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/products" element={<Store />} />
            <Route path="/*" element={<Navigate to="/products" />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<Navigate to="/signUp" />} />
          </Routes>
        </SearchContextProvider>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
