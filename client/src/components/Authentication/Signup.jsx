import React, { useReducer, useRef, useState } from "react";
import classes from "./LoginSignup.module.css";
import { Link } from "react-router-dom";
import {
  initialSignupForm,
  signupFormReducer,
} from "../../assets/forms/login-signup";

const Signup = ({ img }) => {
  const [signupForm, dispatchSignup] = useReducer(
    signupFormReducer,
    initialSignupForm
  );

  const signupFormHandler = () => {
    console.log(signupForm.name.length);
    if (signupForm.name.length === 0) {
      dispatchSignup({ type: "FIELD_ERR", field: "nameErr" });
    }
    if (signupForm.username.length === 0) {
      dispatchSignup({ type: "FIELD_ERR", field: "usernameErr" });
    }
    if (signupForm.email.length === 0) {
      dispatchSignup({ type: "FIELD_ERR", field: "emailErr" });
    }
    if (signupForm.password.length === 0) {
      dispatchSignup({ type: "FIELD_ERR", field: "passwordErr" });
    }
    if (signupForm.confirm_password.length === 0) {
      dispatchSignup({ type: "FIELD_ERR", field: "confirm_passwordErr" });
    }
  };
  return (
    <div className={classes["signup"]}>
      <img src="" alt="ddsds" />
      <h2>SignUp</h2>
      <div>
        <input
          className={
            signupForm.nameErr ? classes["input-error"] : classes["input"]
          }
          onChange={(e) => {
            dispatchSignup({
              type: "NAME",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          name="name"
          type="text"
          placeholder="Enter your Name"
        />
        <span
          style={
            signupForm.nameErr
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {signupForm.nameErr}*
        </span>
        <input
          className={
            signupForm.usernameErr ? classes["input-error"] : classes["input"]
          }
          onChange={(e) => {
            dispatchSignup({
              type: "USERNAME",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          type="text"
          name="username"
          placeholder="Enter username"
        />
        <span
          style={
            signupForm.usernameErr
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {signupForm.usernameErr}*
        </span>
        <input
          className={
            signupForm.emailErr ? classes["input-error"] : classes["input"]
          }
          onChange={(e) => {
            dispatchSignup({
              type: "EMAIL",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          name="email"
          type="email"
          placeholder="Enter Email"
        />
        <span
          style={
            signupForm.emailErr
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {signupForm.emailErr}*
        </span>
        <input
          className={
            signupForm.passwordErr ? classes["input-error"] : classes["input"]
          }
          onChange={(e) => {
            dispatchSignup({
              type: "PASSWORD",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          name="password"
          type="password"
          placeholder="Enter Password"
        />
        <span
          style={
            signupForm.passwordErr
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {signupForm.passwordErr}*
        </span>
        <input
          className={
            signupForm.confirm_passwordErr
              ? classes["input-error"]
              : classes["input"]
          }
          onChange={(e) => {
            dispatchSignup({
              type: "CONFIRM_PASSWORD",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          name="confirm_password"
          type="password"
          placeholder="Enter confirm Password"
        />
        <span
          style={
            signupForm.confirm_passwordErr
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {signupForm.confirm_passwordErr}*
        </span>
      </div>
      <button onClick={signupFormHandler}>Signup</button>
      <p
        onClick={() => {
          img.current.style.right = "0%";
          img.current.style.borderRadius = "0 12px 12px 0 ";
        }}
      >
        Already have an account
      </p>
    </div>
  );
};

export default Signup;
