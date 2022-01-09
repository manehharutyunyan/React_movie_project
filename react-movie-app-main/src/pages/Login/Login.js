import React, {
//   useState,
//   useEffect,
//   useReducer,
//   useContext,
//   useRef,
} from "react";

import Card from "../../components/Card/Card.js";
import Button from "../../components/Button/Button.js";
//import AuthContext from "../../context/auth-context.js";
import Input from "../../components/Input/Input.js";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";
import useInput from "../../components/hooks/UseInput.js";

const isEmail = (value) => value.includes("@");
const isSecurePassword = (value) => value.length > 6;

const Login = (props) => {
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput(isSecurePassword);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log('Submitted!');
    console.log(emailValue, passwordValue);

    resetEmail();
    resetPassword()
  };

  const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
  const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control';

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          id="email"
          label="E-Mail"
          type="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          className={emailClasses}
        />
        {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
        <Input 
        id="password"
        label="Password"
        type="password" 
        onChange = {passwordChangeHandler}
        onBlur={passwordBlurHandler}
        value={passwordValue}
        className={passwordClasses}
        />
       {passwordHasError && <p className="error-text">Password should contain at least 6 characters.</p>}
        <div className={classes.actions}>
          <NavLink to="/home">
            <Button type="submit" className={classes.btn}>
              Login
            </Button>
          </NavLink>
        </div>
      </form>
    </Card>
  );
};

export default Login;
