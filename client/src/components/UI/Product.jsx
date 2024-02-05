import React, { useContext, useState } from "react";
import classes from "./Product.module.css";
import b1 from "../../assets/new_arrivals/bracelet-1.jpeg";
import b2 from "../../assets/new_arrivals/bracelet-2.jpeg";
import e1 from "../../assets/new_arrivals/earing-1.jpeg";
import new_arrival from "../../assets/new_arrival";
import { useParams, useNavigate } from "react-router";
import ShopContext from "../../context/Context";
import ProductDescription from "./ProductDescription";
const Product = (props) => {
  const { productId } = useParams();

  const { quantity, decreaseQuantity, increaseQuantity, addToCart } =
    useContext(ShopContext);
  const navigate = useNavigate();
  let product = new_arrival.find((e) => e.id === productId);
  const [image, setImage] = useState(product.image);
  const setImageHandler = (img) => {
    setImage(img);
  };
  product = { ...product, quantity: 10 };
  return (
    <div className={classes["show-products"]}>
      <div className={classes["breadcrum"]}></div>
      <div className={classes["show-product"]}>
        <div className={classes["show-product-left"]}>
          <div className={classes["image-container"]}>
            <img
              src={b1}
              alt=""
              onMouseEnter={() => setImageHandler(b1)}
              onMouseLeave={() => setImageHandler(product.image)}
            />
            <img
              src={b2}
              alt=""
              onMouseEnter={() => setImageHandler(b2)}
              onMouseLeave={() => setImageHandler(product.image)}
            />
            <img
              src={e1}
              alt=""
              onMouseEnter={() => setImageHandler(e1)}
              onMouseLeave={() => setImageHandler(product.image)}
            />
          </div>
          <div className={classes["product-image"]}>
            <img src={image} alt="" />
          </div>
        </div>
        <div className={classes["show-product-right"]}>
          <h2>{product.name}</h2>
          <div className={classes["stock-reviews"]}>
            <p className={classes.reviews}>Reviews({product.reviews})</p>
            <p className={classes.stock}>
              Stock: <span>{product.stock}</span>
            </p>
          </div>
          <div className={classes.price}>
            <p>&#8377;{product.current_price}</p>
            {product.old_price ? <span>&#8377; {product.old_price}</span> : ""}
          </div>
          <div className={classes["button-count"]}>
            <div className={classes["count-button"]}>
              <button onClick={decreaseQuantity}>-</button>
              {quantity}
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div className={classes["card-button"]}>
              <button>Add to cart</button>
            </div>
          </div>
          <div className={classes["buy-button"]}>
            <button
              onClick={() => {
                addToCart(product);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
          <hr />
        </div>
      </div>
      <ProductDescription />
    </div>
  );
};

export default Product;
