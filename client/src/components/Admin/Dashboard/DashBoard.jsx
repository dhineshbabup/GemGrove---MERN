import React, { useState } from "react";
import classes from "./DashBoard.module.css";
import FetchProduct from "../DisplayProducts/FetchProduct";
import AddProduct from "../AddProduct";
const DashBoard = () => {
  const [adminControl, setAdminControl] = useState("dash");
  function handleAdminControl(dash) {
    setAdminControl(dash);
  }
  return (
    <div className={classes["dashboard"]}>
      <div className={classes["dashboard-right"]}>
        <h2>Hello Admin,</h2>
        <p onClick={() => handleAdminControl("show-products")}>Show Products</p>
        <p onClick={() => handleAdminControl("add-product")}>Add Product</p>
        <p onClick={() => handleAdminControl("edit-product")}>Edit Product</p>
      </div>
      <div className={classes["dashboard-left"]}>
        <>
          <h2>Welcome Back</h2>
          <button onClick={() => handleAdminControl("show-products")}>
            List All Products
          </button>
          <hr />
        </>
        {adminControl === "show-products" ? (
          <FetchProduct isEdit={false} />
        ) : adminControl === "edit-product" ? (
          <FetchProduct isEdit={true} />
        ) : adminControl === "add-product" ? (
          <AddProduct />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default DashBoard;
