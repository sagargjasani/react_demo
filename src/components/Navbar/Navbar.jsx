import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/logo192.png" alt="log" />
      </Link>
      <div className="navlinks">
        <Link to="/all-products">All Products</Link>
        <Link to="/add-product">
          <Button type="primary" size="large">
            Add Product
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
