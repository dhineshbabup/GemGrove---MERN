import React from "react";
import classes from "./Popup.module.css";
const Popup = (props) => {
  return (
    <div className={classes["popup-backdrop"]}>
      <div className={classes["popup"]}>
        <h2>{props.message}</h2>
        <p>{props.alert}</p>
        <div>
          <button className={classes["cancel"]} onClick={props.handleShowPopup}>
            Cancel
          </button>
          <button onClick={props.handleDelete}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
