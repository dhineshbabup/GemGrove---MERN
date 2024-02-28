import React from "react";
import classes from "./Profile.module.css";
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
        <button>Update</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
