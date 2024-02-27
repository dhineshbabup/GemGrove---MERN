import React, { useState, useContext } from "react";
import classes from "./ProductDisplay.module.css";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ShopContext from "../../context/Context";

const ProductDisplay = (props) => {
  const { addToCart, addToWishList } = useContext(ShopContext);
  const addWish = (p) => {
    console.log(p);
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
    addToWishList(pr);
  };
  console.log(props);
  return (
    <div className={classes.products} key={props.id}>
      <div className={classes.product} key={props.id}>
        <Link to={`/product/${props.id}`}>
          <img src={props.img} alt="drive" />
        </Link>
        <button className={classes.button} onClick={() => addToCart(props)}>
          Add to cart
        </button>
        <div className={classes.off}>
          {props.tag ? <span>{props.tag}</span> : ""}
          {props.offer ? <span>{props.offer}</span> : ""}
        </div>
        <div className={classes.left}>
          <FiHeart onClick={() => addToWishList(props)} className={classes.icons} />
          <RiShoppingCartLine className={classes.icons} />
        </div>
      </div>
      <div className={classes["product-description"]}>
        <p>{props.name}</p>
        <div>
          <p>&#8377;{props.curr_price}</p>
          {props.old_price ? <span>&#8377; {props.old_price}</span> : ""}
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
