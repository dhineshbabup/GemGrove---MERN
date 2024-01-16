import React from "react";
import classes from "./Offers.module.css";
const Offers = () => {
  return (
    <div id={classes.offers}>
      <div className={classes["offer-left"]}>
        <div>
          <p>SALE- Further reductions</p>
          <h2>Up to 60% off</h2>
          <p>Great fashion at best price!</p>
        </div>
      </div>
      <div className={classes["offer-right"]}>
        <div>
        <img src="https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
          <h1> hello</h1>
      </div>
    </div>
  );
};

export default Offers;
