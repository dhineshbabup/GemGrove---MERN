import React, { useState } from "react";
import DisplayProducts from "./DisplayProducts";
import classes from "./DisplayProducts.module.css";
import axios from "axios";
const FetchProduct = ({ isEdit }) => {
  const [products, setProducts] = useState([]);
  useState(async () => {
    const response = await axios.get("http://localhost:8000/admin/getProducts");
    setProducts(response.data);
  });

  return (
    <div className={classes["fetch-product"]}>
      {products.map((product) => {
        return (
          <DisplayProducts
            key={product._id}
            _id={product._id}
            img={product.images[0].img1}
            name={product.name}
            price={product.curr_price}
            isEdit={isEdit}
          />
        );
      })}
    </div>
  );
};

export default FetchProduct;
