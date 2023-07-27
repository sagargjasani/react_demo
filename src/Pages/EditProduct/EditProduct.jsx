import React from "react";
import ProductForm from "../../components/ProductForm/ProductForm";
import "./EditProduct.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const EditProduct = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products.allProducts);
  console.log("id", id);
  console.log("products", products);
  const initialValues = products.find((item) => item.id === +id);
  console.log(initialValues);
  return (
    <div className="EditProduct">
      <ProductForm initialValues={initialValues} />
    </div>
  );
};

export default EditProduct;
