import React, { useReducer, useRef, useState } from "react";
import classes from "./LoginSignup.module.css";
import { Link } from "react-router-dom";
import {
  loginFormReducer,
  initialLoginForm,
} from "../../assets/forms/login-signup";
const Login = ({ img }) => {
  const [loginForm, dispatchLogin] = useReducer(
    loginFormReducer,
    initialLoginForm
  );
  const loginFormHandler = () => {
    if (loginForm.emailErr === true) {
      dispatchLogin({ type: "EMAIL_ERROR", field: "emailErrMsg" });
    } else {
      dispatchLogin({ type: "ERROR_FIX", field: "emailErrMsg" });
    }
    if (loginForm.passErr === true) {
      dispatchLogin({ type: "PASSWORD_ERROR", field: "passErrMsg" });
    } else {
      dispatchLogin({ type: "ERROR_FIX", field: "passErrMsg" });
    }
    if (loginForm.email.length === 0) {
      dispatchLogin({ type: "FIELD_ERR", field: "emailErrMsg" });
    }
    if (loginForm.password.length === 0) {
      dispatchLogin({ type: "FIELD_ERR", field: "passErrMsg" });
    }
  };
  return (
    <div className={classes["login"]}>
      <img src="" alt="ddsds" />
      <h2>Login</h2>
      <div>
        <input
          className={
            loginForm.emailErr ? classes["input-error"] : classes["input"]
          }
          type="email"
          name="email"
          onChange={(e) =>
            dispatchLogin({
              type: "email",
              field: e.target.name,
              payload: e.target.value,
            })
          }
          placeholder="Enter Your Email"
        />
        <span
          style={
            loginForm.emailErrMsg
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {loginForm.emailErrMsg}*
        </span>
        <input
          className={
            loginForm.passErr ? classes["input-error"] : classes["input"]
          }
          type="password"
          name="password"
          onChange={(e) =>
            dispatchLogin({
              type: "PASSWORD",
              field: "password",
              payload: e.target.value,
            })
          }
          placeholder="Enter Your Password"
        />
        <span
          style={
            loginForm.passErrMsg
              ? { visibility: "visible" }
              : { visibility: "hidden" }
          }
        >
          {loginForm.passErrMsg}*
        </span>
      </div>
      <button onClick={loginFormHandler}>Login</button>
      <Link className={classes["forgot"]}>Forgot password ?</Link>
      <p
        onClick={() => {
          img.current.style.right = "50%";
          img.current.style.borderRadius = " 12px 0 0 12px";
        }}
      >
        Create an account
      </p>
    </div>
  );
};

export default Login;
