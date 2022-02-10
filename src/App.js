import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store";
import Header from "./components/Header";
import ShopCart from "./components/ShopCart";

//context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
import Clear from "./components/Clear";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <Header/>
        <Routes>
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/clear" element={<Clear />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/products" element={<Store />} />
          <Route path="/*" element={<Navigate to="/products" />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
