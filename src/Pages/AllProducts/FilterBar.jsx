import { Input, Select, Typography } from "antd";
import React from "react";
import "./FilterBar.scss";
import { useActions } from "../../Store/useActions";
import { useSelector } from "react-redux";
const FilterBar = () => {
  const { handleFilter } = useActions();
  const categories = useSelector((state) => state.products.categories);

  const handleSearch = (e) => {
    handleFilter({ type: "name", value: e.target.value });
  };
  const handCategoryChange = (e) => {
    handleFilter({ type: "category", value: e });
  };
  const handSort = (e) => {
    handleFilter({ type: "sort", value: e });
  };
  return (
    <div className="FilterBar">
      <div className="filterItem">
        <Typography.Title level={5}>Search Product</Typography.Title>
        <Input onChange={handleSearch} placeholder="Search" />
      </div>
      <div className="filterItem">
        <Typography.Title level={5}>Category</Typography.Title>
        <Select
          name="category"
          onChange={handCategoryChange}
          defaultValue=""
          options={[{ value: "", label: "All" }, ...categories]}
        />
      </div>
      <div className="filterItem">
        <Typography.Title level={5}>Sort By</Typography.Title>
        <Select
          onChange={handSort}
          defaultValue="name"
          options={[
            { value: "name", label: "Name" },
            { value: "price", label: "Price" },
            { value: "category", label: "Category" },
          ]}
        />
      </div>
    </div>
  );
};

export default FilterBar;
