import React from "react";
import classes from "./Popup.module.css";
const Popup = ({children}) => {
  return (
    <div className={classes["popup-backdrop"]}>
      <div className={classes["popup"]}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
