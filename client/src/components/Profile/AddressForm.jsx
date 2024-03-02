import React, { useState } from "react";
import classes from "./Profile.module.css";
import { IoIosClose } from "react-icons/io";
import Button from "../UI/Button";
const AddressForm = ({ handleShowAddress }) => {
  const [place, setPlace] = useState("");
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  return (
    <div className={classes["address-form-backfrop"]}>
      <div className={classes["address-form"]}>
        <div className={classes["address-form-heading"]}>
          <h2>Add new address</h2>
          <IoIosClose
            onClick={handleShowAddress}
            className={classes["close"]}
          />
        </div>
        <div className={classes["address-forms"]}>
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Mobile number</label>
          <input type="text" />
          <label htmlFor="">Building No/Door No</label>
          <input type="text" />
          <label htmlFor="">Street Name/Locality</label>
          <input type="text" />
          <label htmlFor="">Pincode</label>
          <input type="number" />
          <label htmlFor="">City</label>
          <input type="text" />
          <label htmlFor="">State</label>
          <input type="text" />
          <label>
            <input
              type="radio"
              value="Home"
              checked={place === "Home"}
              onChange={handlePlaceChange}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              value="Office"
              checked={place === "Office"}
              onChange={handlePlaceChange}
            />
            Office
          </label>
          <Button style={classes["address-forms-button"]}>Save Address</Button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
