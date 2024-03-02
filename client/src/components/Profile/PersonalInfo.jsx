import React, { useState } from "react";
import classes from "./Profile.module.css";
import Button from "../UI/Button";
const PersonalInfo = ({
  name,
  email,
  mobile,
  handleName,
  handleMobile,
  handleEmail,
  updatePersonalInfo,
}) => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const handleSubmit = () => {
    setNameError("");
    setEmailError("");
    setMobileError("");

    if (!name) {
      setNameError("Name cannot be empty");
    }
    if (!email) {
      setEmailError("Email cannot be empty");
    }
    if (!mobile) {
      setMobileError("Mobile number cannot be empty");
    }
    if (name && email && mobile) {
      updatePersonalInfo();
    }
  };

  return (
    <div className={classes["personal-info"]}>
      <h2>Personal Information</h2>
      <p>
        Hey there! Fill in your details for a personalized GEMGROOVE shopping
        experience.
      </p>
      <div className={classes["personal-info-form"]}>
        <label htmlFor="">Name</label>
        <input type="text" value={name} onChange={handleName} />
        {nameError && <span className={classes.error}>{nameError}</span>}
        <label htmlFor="">Email</label>
        <input type="email" value={email} onChange={handleEmail} />
        {emailError && <span className={classes.error}>{emailError}</span>}
        <label htmlFor="">Mobile_no</label>
        <input type="number" value={mobile} onChange={handleMobile} />
        {mobileError && <span className={classes.error}>{mobileError}</span>}
        <Button
          style={classes["personal-info-form-button"]}
          handleFunction={handleSubmit}
        >
          Update
        </Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
