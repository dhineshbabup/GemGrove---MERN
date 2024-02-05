import React, { useContext, useState } from "react";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { RiShoppingCartLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import ShopContext from "../../context/Context";
const Navbar = () => {
  const [showNavabr, setShowNavbar] = useState(false);
  const {cartItemsLength} = useContext(ShopContext)
  return (
    <div className={classes.navbar}>
      <div className={classes["desktop-navbar"]}>
        <div className={classes["nav-links"]}>
          <h2>GemGrove</h2>
          <Link className={classes["nav-link"]} to="/">
            Home
          </Link>
          <Link className={classes["nav-link"]} to="/about">
            About
          </Link>
          <Link className={classes["nav-link"]} to="/contact">
            Contact
          </Link>
          <Link className={classes["nav-link"]} to="/service">
            Service
          </Link>
        </div>
        <div className={classes["nav-items"]}>
          <input type="text" placeholder="Search" />
          <div className={classes["nav-item-icon"]}>
            <Link to="/wishlist"><FiHeart className={classes["nav-item"]} /></Link>
          </div>
          <div className={classes["nav-item-icon"]}>
            <Link to="/cart"><RiShoppingCartLine className={classes["nav-item"]} /></Link>
            <div className={classes.patch}>{cartItemsLength}</div>
          </div>
        </div>
      </div>
      <div className={classes["mobile-navbar"]}>
        <RiMenu2Fill onClick={() => setShowNavbar(!showNavabr)} />
        <h2>GemGrove</h2>
        <div
          className={
            showNavabr
              ? `${classes["show"]} ${classes.mob}`
              : `${classes["hide"]} ${classes.mob}}`
          }
        >
          <Link className={classes["nav-link"]} to="/">
            Home
          </Link>
          <Link className={classes["nav-link"]} to="/about">
            About
          </Link>
          <Link className={classes["nav-link"]} to="/contact">
            Contact
          </Link>
          <Link className={classes["nav-link"]} to="/service">
            Service
          </Link>
        </div>
        <div>
          <FiHeart className={classes["nav-item"]} />
          <RiShoppingCartLine className={classes["nav-item"]} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
