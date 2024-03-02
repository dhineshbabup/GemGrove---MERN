import React from "react";
import classes from "./Profile.module.css";
import Button from "../UI/Button";
const PersonalInfo = () => {
  return (
    <div className={classes["personal-info"]}>
      <h2>Personal Information</h2>
      <p>
        Hey there! Fill in your details for a personalized GEMGROOVE shopping
        experience.
      </p>
      <div className={classes["personal-info-form"]}>
        <label htmlFor="">Name</label>
        <input type="text" />
        <label htmlFor="">Email</label>
        <input type="email" />
        <label htmlFor="">Mobile_no</label>
        <input type="text" />
        <Button style={classes['personal-info-form-button']}>Update</Button>
      </div>
    </div>
  );
};

export default PersonalInfo;
