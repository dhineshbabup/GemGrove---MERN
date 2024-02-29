import React, { useEffect, useState } from "react";
import ProductDisplay from "../components/UI/ProductDisplay";
import axios from "axios";
import classes from "./ShowProduct.module.css";
import { useParams } from "react-router";
import Dropdown from "./Dropdown";
const ShowProduct = (props) => {
  const { category } = useParams();
  const [showProduct, setShowProduct] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/user/product/${category}`
        );

        setShowProduct(res.data);
      } catch (err) {
        console.log("fetching error");
      }
    };
    fetchProducts();
  }, []);
  const [sortBy, setSortBy] = useState("");
  const handleSortChange = (option) => {
    setSortBy(option);
  };
  useEffect(() => {
    const sort = () => {
      switch (sortBy) {
        case "Low to High":
          const ascSortedProducts = [...showProduct].sort(
            (a, b) => a.curr_price - b.curr_price
          );
          setShowProduct(ascSortedProducts);
          return;
        case "High to Low":
          const desSortedProducts = [...showProduct].sort(
            (a, b) => b.curr_price - a.curr_price
          );
          setShowProduct(desSortedProducts);
          return;
        default:
          return;
      }
    };
    sort();
  }, [sortBy]);
  return (
    <div className={classes["show-products"]}>
      <div className={classes["details"]}>
        <h2>{category}</h2>
        <Dropdown
          options={["Low to High", "High to Low", "Recommended"]}
          onSelect={handleSortChange}
        />
      </div>
      <div className={classes["show-product"]}>
        {showProduct &&
          showProduct.map((s) => {
            return (
              <div key={s._id}>
                <ProductDisplay
                  id={s._id}
                  offer={s.offer}
                  tag={s.tag}
                  img={s.images.img1}
                  old_price={s.old_price}
                  curr_price={s.curr_price}
                  name={s.name}
                  quantity={1}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ShowProduct;
