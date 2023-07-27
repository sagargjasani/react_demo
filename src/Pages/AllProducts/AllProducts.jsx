import React from "react";
import Product from "../../components/Product/Product";
import { useSelector } from "react-redux";
import "./allProducts.scss";
import FilterBar from "./FilterBar";
import { Button, Popconfirm, Typography } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { useActions } from "../../Store/useActions";
const AllProducts = () => {
  const { allProducts, selectedProducts } = useSelector(
    (state) => state.products
  );

  const { deleteSelectedProduct } = useActions();

  return (
    <>
      <FilterBar />
      <div className="productCount">
        <Typography.Title
          level={5}
        >{`Total Products: ${allProducts.length}`}</Typography.Title>
        {selectedProducts.length > 0 && (
          <Popconfirm
            title="Delete selected Products?"
            description="Are you sure to delete all the selected Products?"
            onConfirm={deleteSelectedProduct}
            icon={
              <QuestionCircleOutlined
                style={{
                  color: "red",
                }}
              />
            }
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete All
            </Button>
          </Popconfirm>
        )}
      </div>
      <div className="allProducts">
        {allProducts.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
