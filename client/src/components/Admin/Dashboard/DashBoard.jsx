import React, { useState } from "react";
import classes from "./DashBoard.module.css";
import FetchProduct from "../DisplayProducts/FetchProduct";
import AddProduct from "../AddProduct/AddProduct";
import Button from "../../UI/Button";
const DashBoard = () => {
  const [adminControl, setAdminControl] = useState("dash");
  function handleAdminControl(dash) {
    setAdminControl(dash);
  }
  return (
    <div className={classes["dashboard"]}>
      <div className={classes["dashboard-right"]}>
        <h2>Hello Admin,</h2>
        <p
          className={classes["dash-para"]}
          onClick={() => handleAdminControl("show-products")}
        >
          Show Products
        </p>
        <p
          className={classes["dash-para"]}
          onClick={() => handleAdminControl("add-product")}
        >
          Add Product
        </p>
        <p
          className={classes["dash-para"]}
          onClick={() => handleAdminControl("edit-product")}
        >
          Edit Product
        </p>
      </div>
      <div className={classes["dashboard-left"]}>
        <>
          <h2>Welcome Back</h2>
          <Button
            style={classes["dashboard-left-button"]}
            handleFunction={() => handleAdminControl("show-products")}
          >
            List All Products
          </Button>
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
