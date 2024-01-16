import React from "react";
import classes from "./Navbar.module.css";
// const Navbar = () => {
function Navbar() {
  return (
    <div className={classes.navbar}>
      <div className={classes["nav-links"]}>
        <h2>GemGrove</h2>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Service</li>
      </div>
      <div className={classes.search}>
        <input type="text" placeholder="Search" />
      </div>
    </div>
  );
}

export default Navbar;
