import React, { useReducer, useRef, useState } from "react";
import classes from "./LoginSignup.module.css";
import Login from "./Login";
import Signup from "./Signup";
import {
  loginFormReducer,
  initialLoginForm,
  initialSignupForm,
  signupFormReducer,
} from "../../assets/forms/login-signup";
const LoginSignup = () => {
  const img = useRef();
  const [showSignup, setShowSignup] = useState();
  return (
    <div className={classes["login-signin"]}>
      <div className={classes["log-sign"]}>
        <Login img={img}/>
        <Signup img={img}/>
        <div
          ref={img}
          className={`
          ${classes["slide-animation"]}
          `}
        ></div>
      </div>
    </div>
  );
};

export default LoginSignup;
