import React, { useContext, useEffect, useState } from "react";
import DisplayProducts from "./DisplayProducts";
import classes from "./DisplayProducts.module.css";
import axios from "axios";
import { useNavigate } from "react-router";
import ShopContext from "../../../context/Context";
const FetchProduct = ({ isEdit }) => {
  const { cookie } = useContext(ShopContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:8000/admin/getProducts",
        {
          headers: {
            key: cookie.key,
          },
        }
      );
      console.log(response);
      if (response.status === 401) {
        navigate("/");
        return;
      }
      setProducts(response.data);
    };
    fetchData();
  }, [products]);
  console.log(products);
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
