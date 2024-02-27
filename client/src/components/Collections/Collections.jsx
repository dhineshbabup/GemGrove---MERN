import React from "react";
import classes from "./Collections.module.css";
import bottle from "../../assets/bottle.jpeg";
import eyeGlass from "../../assets/glasses.jpeg";
import handbag from "../../assets/handbags.jpeg";
import ring from "../../assets/ring.jpeg";
import watch from "../../assets/watch.jpeg";
import { Link } from "react-router-dom";
import necklace from "../../assets/necklace.jpeg";
const Collections = () => {
  return (
    <div className={classes.root}>
      <h3>Collections</h3>
      <div className={classes.collection}>
        <div className={classes.content}>
          <div className={classes.contents}>
            <Link to="/showproduct/handbags">
              <img src={handbag} alt="" />
              <div className={classes.overlay}></div>
              <h1>Luxury Handbags</h1>
            </Link>
          </div>
          <div className={classes.contents}>
            <Link to="/showproduct/watch">
              <img src={watch} alt="" />
              <div className={classes.overlay}></div>
              <h1>Watches for Men</h1>
            </Link>
          </div>
        </div>

        <div className={classes.content}>
          <div className={classes.contents}>
            <Link to="/showproduct/sunglasses">
              <img src={eyeGlass} alt="" />
              <div className={classes.overlay}></div>
              <h1>Stylish eye glasses</h1>
            </Link>
          </div>
          <div className={classes.coll}>
            <h2>GemGrove New Collection</h2>
          </div>
          <div className={classes.contents}>
            <Link to="/showproduct/perfume">
              <img src={bottle} alt="" />
              <div className={classes.overlay}></div>
              <h1>Top Brand perfume Bottles</h1>
            </Link>
          </div>
        </div>
        <div className={classes.content}>
          <div className={classes.contents}>
            <Link to="/showproduct/rings">
              <img src={ring} alt="" />
              <div className={classes.overlay}></div>
              <h1>Gold and Silver Rings</h1>
            </Link>
          </div>
          <div className={classes.contents}>
            <Link to="/showproduct/necklace">
              <img src={necklace} alt="" />
              <div className={classes.overlay}></div>
              <h1>Necklace</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
