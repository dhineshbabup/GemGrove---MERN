import React, { useContext, useReducer, useRef, useState } from "react";
import classes from "./LoginSignup.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  loginFormReducer,
  initialLoginForm,
} from "../../assets/forms/login-signup";
import axios from "axios";
import logo from "../../assets/sample.png";
import ShopContext from "../../context/Context";
const Login = ({ img }) => {
  const { cookie, setCookie, removeCookie } = useContext(ShopContext);
  const [loginForm, dispatchLogin] = useReducer(
    loginFormReducer,
    initialLoginForm
  );
  const navigate = useNavigate();
  const loginFormHandler = () => {
    if (loginForm.emailErr === true) {
      dispatchLogin({ type: "EMAIL_ERROR", field: "emailErrMsg" });
      return;
    } else {
      dispatchLogin({ type: "ERROR_FIX", field: "emailErrMsg" });
    }
    if (loginForm.passErr === true) {
      dispatchLogin({ type: "PASSWORD_ERROR", field: "passErrMsg" });
      return;
    } else {
      dispatchLogin({ type: "ERROR_FIX", field: "passErrMsg" });
    }
    if (loginForm.email.length === 0) {
      dispatchLogin({ type: "FIELD_ERR", field: "emailErrMsg" });
      return;
    }
    if (loginForm.password.length === 0) {
      dispatchLogin({ type: "FIELD_ERR", field: "passErrMsg" });
      return;
    }
    submitHandler();
  };
  const submitHandler = async () => {
    const response = await axios.post("http://localhost:8000/login", {
      email: loginForm.email,
      password: loginForm.password,
    });
    console.log(response);
    if (response.data.status) {
      localStorage.setItem("token", [response.data.token, response.data.email]);
      setCookie("key", response.data.token);
      setCookie("role", response.data.role);
      if (response.data.role === true) {
        navigate("/dashboard");
      } else {
        navigate("/");
      }
    }
  };
  return (
    <div className={classes["login"]}>
      <img src={logo} alt="logo" className={classes["login-logo"]} />
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
      <button className={classes["button"]} onClick={loginFormHandler}>
        Login
      </button>
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
