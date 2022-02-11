import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import ShopCart from "./components/ShopCart";
import Navbar from "./components/Navbar/Navbar"


//context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
