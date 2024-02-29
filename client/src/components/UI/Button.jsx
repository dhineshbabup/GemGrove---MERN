import React from "react";
import classes from "./ProductDisplay.module.css";
const Button = ({ children, handleFunction, style }) => {
  return (
    <button className={`${classes["button-ui"]} ${style}`} onClick={handleFunction}>
      {children}
    </button>
  );
};

export default Button;
