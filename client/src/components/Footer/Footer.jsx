import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footerTop}>
        <div className={classes.footerLogo}>
          <p>
            GemGroove offers a stunning array of accessories for every style
            enthusiast. From exquisite rings to captivating perfumes, our
            collection embodies elegance and sophistication. Discover timeless
            necklaces, luxurious watches, and chic glasses designed to elevate
            your everyday look.
          </p>
        </div>
        <div className={classes.footerLinks}>
          <div className={classes.footerSection}>
            <h2>SERVICES</h2>
            <ul>
              <li>Treats Club</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div className={classes.footerSection}>
            <h2>ABOUT</h2>
            <ul>
              <li>Our Brand</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={classes.footerSection}>
            <h2>DELIVERY & RETURN</h2>
            <ul>
              <li>Check Order</li>
              <li>Delivery & Collection</li>
              <li>Delivery Return</li>
            </ul>
          </div>
          <div className={classes.footerSection}>
            <h2>CUSTOMER SERVICES</h2>
            <ul>
              <li>Terms & Policies</li>
              <li>Contact Us</li>
              <li>Gift Cards</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <p>&copy; GemGroove. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
