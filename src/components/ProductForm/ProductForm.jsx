import React, { useState } from "react";
import FormikForm from "../Formik/FormikForm";
import FormikTextField from "../Formik/FormikTextField";
import FormikSelect from "../Formik/FormikSelect";
import * as yup from "yup";
import { useSelector } from "react-redux";
import FormikSubmitButton from "../Formik/FormikSubmitButton";
import { useActions } from "../../Store/useActions";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const validationSchema = yup.object().shape({
  title: yup.string().required().label("Product Name"),
  description: yup.string().required().label("Product Description"),
  price: yup.number().required().label("Price"),
  category: yup.string().required().label("Category"),
  discountPercentage: yup.number().min(0).max(100).required().label("Discount"),
  stock: yup.number().required().label("Stock"),
});

const ProductForm = ({ initialValues }) => {
  const categories = useSelector((state) => state.products.categories);
  const [loading, setLoading] = useState(false);
  const { addProducts } = useActions();
  const navigate = useNavigate();
  const handleSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      // to simulate api call
      addProducts(values);
      setLoading(false);
      message.success(
        `Product ${initialValues.id ? "updated" : "added"} successfully`
      );
      navigate("/all-products");
    }, 1000);
  };
  return (
    <>
      <FormikForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormikTextField name="title" label="Product Name" />
        <FormikTextField name="description" label="Description" />
        <FormikSelect name="category" label="Category" data={categories} />
        <FormikTextField name="price" type="number" label="Price" />
        <FormikTextField
          name="discountPercentage"
          type="number"
          label="Discount in %"
        />
        <FormikTextField name="stock" type="number" label="Stock" />
        <FormikSubmitButton
          title={`${initialValues.id ? "Update" : "Add"} Product`}
          loading={loading}
        />
      </FormikForm>
    </>
  );
};

export default ProductForm;
