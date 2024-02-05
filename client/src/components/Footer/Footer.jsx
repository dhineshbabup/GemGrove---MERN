import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes["footer"]}>
      <div className={classes["footer-top"]}>
        <div>
          <h2>Logo</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            culpa facilis minus ad maiores quas reiciendis quam dolor amet qui!
          </h3>
          <div></div>
        </div>
        <div>
          <h2>SERVICES</h2>
          <p>Treats Club</p>
          <p>site map</p>
        </div>
        <div>
          <h2>ABOUT</h2>
          <p>Our Brand</p>
          <p>Careers</p>
        </div>
        <div>
          <h2>DELIVERY & RETURN</h2>
          <p> Check Order</p>
          <p>Delivery & Collection</p>
          <p>Delivery Return</p>
        </div>
        <div>
          <h2>CUSTOMER SERVICES</h2>
          <p>Terms & Policies</p>
          <p>Contact Us</p>
          <p>Gift Cards</p>
        </div>
      </div>

      <hr />
      <p> &copy; GemGroove rights reserved </p>
    </div>
  );
};

export default Footer;
