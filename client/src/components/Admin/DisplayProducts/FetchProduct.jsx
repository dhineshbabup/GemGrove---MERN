import React, { useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import classes from "./DisplayProducts.module.css";
import axios from "axios";
const FetchProduct = ({ isEdit }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8000/admin/getProducts"
      );
      setProducts(response.data);
    };
    fetchData();
  }, [products]);
  return (
    <div className={classes["fetch-product"]}>
      {products.map((product) => {
        return (
          <DisplayProducts
            key={product._id}
            _id={product._id}
            img={product.images.img1}
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
