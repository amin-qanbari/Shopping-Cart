import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetails from "./components/ProductDetails";
import Store from "./components/Store"


//context
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <Routes>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/products" element={<Store/>}/>
        <Route path="/*" element={<Navigate to="/products"/>} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
