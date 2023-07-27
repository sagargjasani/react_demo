import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./AddProduct.scss";
const initialValues = {
  title: "",
  description: "",
  price: "",
  category: "",
  discount: "",
  discountPercentage: "",
  stock: "",
};
const AddProduct = () => {
  return (
    <div className="AddProduct">
      <ProductForm initialValues={initialValues} />
    </div>
  );
};

export default AddProduct;
