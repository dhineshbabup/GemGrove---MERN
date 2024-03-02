import React, { useState } from "react";
import classes from "./Profile.module.css";
import { IoIosClose } from "react-icons/io";
import Button from "../UI/Button";
const AddressForm = ({ addressInfo, handlers }) => {
  const { name, mobile_no, door_no, pincode, city, state, place, street } =
    addressInfo;
  const {
    handleShowAddress,
    handlePlace,
    handleName,
    handleMobile,
    handleDoorNo,
    handleCity,
    handlePincode,
    handleState,
    handleStreet,
    handleAddAddress,
  } = handlers;
  const [errors, setErrors] = useState({
    name: "",
    mobile_no: "",
    door_no: "",
    street: "",
    pincode: "",
    city: "",
    state: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    let formValid = true;
    const newErrors = { ...errors };

    if (!name.trim()) {
      newErrors.name = "Name cannot be empty";
      formValid = false;
    } else {
      newErrors.name = "";
    }

    if (!mobile_no.trim()) {
      newErrors.mobile_no = "Mobile number cannot be empty";
      formValid = false;
    } else {
      newErrors.mobile = "";
    }

    if (!door_no.trim()) {
      newErrors.door_no = "Door/Building number cannot be empty";
      formValid = false;
    } else {
      newErrors.door_no = "";
    }

    if (!street.trim()) {
      newErrors.street = "Street name/locality cannot be empty";
      formValid = false;
    } else {
      newErrors.street = "";
    }

    if (!pincode.trim()) {
      newErrors.pincode = "Pincode cannot be empty";
      formValid = false;
    } else {
      newErrors.pincode = "";
    }

    if (!city.trim()) {
      newErrors.city = "City cannot be empty";
      formValid = false;
    } else {
      newErrors.city = "";
    }

    if (!state.trim()) {
      newErrors.state = "State cannot be empty";
      formValid = false;
    } else {
      newErrors.state = "";
    }

    setErrors(newErrors);

    if (formValid) {
      handleAddAddress(addressInfo);
    }
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
          <input type="text" value={name} onChange={handleName} />
          <span className={classes.error}>{errors.name}</span>
          <label htmlFor="">Mobile number</label>
          <input type="text" value={mobile_no} onChange={handleMobile} />
          <span className={classes.error}>{errors.mobile_no}</span>
          <label htmlFor="">Building No/Door No</label>
          <input type="text" value={door_no} onChange={handleDoorNo} />
          <span className={classes.error}>{errors.door_no}</span>
          <label htmlFor="">Street Name/Locality</label>
          <input type="text" value={street} onChange={handleStreet} />
          <span className={classes.error}>{errors.street}</span>
          <label htmlFor="">Pincode</label>
          <input type="number" value={pincode} onChange={handlePincode} />
          <span className={classes.error}>{errors.pincode}</span>
          <label htmlFor="">City</label>
          <input type="text" value={city} onChange={handleCity} />
          <span className={classes.error}>{errors.city}</span>
          <label htmlFor="">State</label>
          <input type="text" value={state} onChange={handleState} />
          <span className={classes.error}>{errors.state}</span>
          <label>
            <input
              type="radio"
              value="Home"
              checked={place === "Home"}
              onChange={handlePlace}
            />
            Home
          </label>
          <label>
            <input
              type="radio"
              value="Office"
              checked={place === "Office"}
              onChange={handlePlace}
            />
            Office
          </label>
          <Button
            handleFunction={handleSubmit}
            style={classes["address-forms-button"]}
          >
            Save Address
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddressForm;
