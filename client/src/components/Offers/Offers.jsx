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
          <img
            src="https://jaroti-be87.kxcdn.com/jaroti/wp-content/uploads/2022/03/16-840x840.jpg"
            alt=""
          />
          <h2>Flash Sale</h2>
          <p>
            &#8377; 3699.00 <span>&#8377; 8999.00</span>{" "}
          </p>
          <span className={classes.offer}>(60 % off)</span>
        </div>
      </div>
    </div>
  );
};

export default Offers;
