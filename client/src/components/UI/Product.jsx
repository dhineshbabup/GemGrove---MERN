import React, { useContext, useEffect, useState } from "react";
import classes from "./Product.module.css";
import { useParams, useNavigate } from "react-router";
import ShopContext from "../../context/Context";
import ProductDescription from "./ProductDescription";
import axios from "axios";
import ColorChooser from "../../Pages/ColorChooser";
import Cookies from "js-cookie";
const Product = () => {
  const { productId } = useParams();
  const { addToCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [image, setImage] = useState("");
  const setImageHandler = (img) => {
    setImage(img);
  };
  const [quantity, setQuantity] = useState(1);
  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  };
  const decreaseQuantity = () => {
    setQuantity((prev) => {
      console.log(prev);
      if (prev > 1) {
        return prev - 1;
      }
      return (prev = 1);
    });
  };
  const cartProduct = (product) => {
    console.log(product);
    product = {
      ...product,
      quantity: quantity,
    };
    addToCart(product);
  };
  const addCart = (p) => {
    const pr = {
      id: p._id,
      offer: p.offer,
      tag: p.tags,
      img: p.images[0].img1,
      old_price: p.old_price,
      curr_price: p.curr_price,
      name: p.name,
      quantity: 1,
    };
    addToCart(pr);
  };
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/user/getproduct/${productId}`
        );
        setImage(res.data.images.img1);
        setProduct(res.data);
      } catch (err) {
        console.log("fetching error" + err);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className={classes["show-products"]}>
      <div className={classes["breadcrum"]}></div>
      <div className={classes["show-product"]}>
        {product.length !== 0 ? (
          <div className={classes["show-product-left"]}>
            <div className={classes["image-container"]}>
              {product.images.img2.length > 1 ? (
                <img
                  src={product.images.img2}
                  alt=""
                  onMouseEnter={() => setImageHandler(product.images.img2)}
                  onMouseLeave={() => setImageHandler(product.images.img1)}
                />
              ) : (
                ""
              )}
              {product.images.img3.length > 1 ? (
                <img
                  src={product.images.img3}
                  alt=""
                  onMouseEnter={() => setImageHandler(product.images.img3)}
                  onMouseLeave={() => setImageHandler(product.images.img1)}
                />
              ) : (
                ""
              )}
              {product.images.img4.length > 1 ? (
                <img
                  src={product.images.img4}
                  alt=""
                  onMouseEnter={() => setImageHandler(product.images.img4)}
                  onMouseLeave={() => setImageHandler(product.images.img1)}
                />
              ) : (
                ""
              )}
            </div>
            <div className={classes["product-image"]}>
              <img
                src={image}
                alt="drive image"
                style={{
                  width: "400px",
                  height: "400px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        ) : (
          "loading"
        )}
        <div className={classes["show-product-right"]}>
          <h2>{product.name}</h2>
          <div className={classes["stock-reviews"]}>
            <p className={classes.reviews}>Reviews({product.reviews})</p>
            <p className={classes.stock}>
              Stock:
              <span>
                {product.stock === true ? "in Stock" : "Not available"}
              </span>
            </p>
          </div>
          <div className={classes.price}>
            <p>&#8377;{product.curr_price}</p>
            {product.old_price ? <span>&#8377; {product.old_price}</span> : ""}
          </div>
          {product.color ? <ColorChooser colors={product.color} /> : ""}
          <div className={classes["button-count"]}>
            <div className={classes["count-button"]}>
              <button onClick={decreaseQuantity}>-</button>
              {quantity}
              <button onClick={increaseQuantity}>+</button>
            </div>
            <div className={classes["card-button"]}>
              <button
                onClick={() =>
                  Cookies.get("token") ? addToCart(product) : navigate("/login")
                }
              >
                Add to cart
              </button>
            </div>
          </div>
          <div className={classes["buy-button"]}>
            <button
              onClick={() => {
                Cookies.get("token") ? addCart(product) : navigate("/login");
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
