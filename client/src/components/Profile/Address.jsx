import React from "react";
import classes from "./Profile.module.css";
import { MdOutlineLocationOn } from "react-icons/md";

const Address = ({ handleShowAddress }) => {
  return (
    <div className={classes["address"]}>
      <h2>Address Book</h2>
      <p>Save all your addresses for a faster checkout experience.</p>
      <div className={classes["address-info"]}>
        <div onClick={handleShowAddress}>
          <MdOutlineLocationOn /> Add new Address
        </div>
        <div className={classes["addresses"]}></div>
      </div>
    </div>
  );
};

export default Address;
