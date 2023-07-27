import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import AllProducts from "./Pages/AllProducts/AllProducts";
import { useEffect } from "react";
import axios from "axios";
import { useActions } from "./Store/useActions";
import AddProduct from "./Pages/AddProduct/AddProduct";
import EditProduct from "./Pages/EditProduct/EditProduct";

function App() {
  const { initializeProducts } = useActions();
  useEffect(() => {
    axios.get("https://dummyjson.com/products").then(({ data }) => {
      initializeProducts(data.products);
    });
  }, [initializeProducts]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/product/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
