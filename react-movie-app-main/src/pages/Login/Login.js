import React, {
  useState,
  useEffect,
  useReducer,
  useContext,
  useRef,
} from "react";

import Card from "../../components/UI/Card.js";
import Button from "../../components/Button/Button.js";
import AuthContext from "../../context/auth-context.js";
import Input from "../../components/Input/Input.js";
import classes from "./Login.module.css";
import { NavLink } from "react-router-dom";

const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {

    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "INPUT_BLUR") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: "",
    isValid: null,
  });

  const authCtx = useContext(AuthContext);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formIsValid) {
      console.log("submit handler")
      authCtx.onLogin(emailState.value, passwordState.value);
    } else if (!emailIsValid) {
      console.log("email is valid");
      console.console.log(emailIsValid);
      emailInputRef.current.focus();
    } else {
      passwordInputRef.current.focus();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          id="email"
          label="E-Mail"
          type="email"
          isValid={emailIsValid}
          value={emailState.value}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
        />
        <Input
          ref={passwordInputRef}
          id="password"
          label="Password"
          type="password"
          isValid={passwordIsValid}
          value={passwordState.value}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
        />
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

// const isEmail = (value) => value.includes("@");
// const isSecurePassword = (value) => value.length > 6;

// const Login = (props) => {
//   const {
//     value: emailValue,
//     isValid: emailIsValid,
//     hasError: emailHasError,
//     valueChangeHandler: emailChangeHandler,
//     inputBlurHandler: emailBlurHandler,
//     reset: resetEmail,
//   } = useInput(isEmail);

//   const {
//     value: passwordValue,
//     isValid: passwordIsValid,
//     hasError: passwordHasError,
//     valueChangeHandler: passwordChangeHandler,
//     inputBlurHandler: passwordBlurHandler,
//     reset: resetPassword,
//   } = useInput(isSecurePassword);

//   let formIsValid = false;

//   if (emailIsValid && passwordIsValid) {
//     formIsValid = true;
//   }

//   const submitHandler = event => {
//     event.preventDefault();

//     if (!formIsValid) {
//       return;
//     }

//     console.log('Submitted!');
//     console.log(emailValue, passwordValue);

//     resetEmail();
//     resetPassword()
//   };

//   const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';
//   const passwordClasses = passwordHasError ? 'form-control invalid' : 'form-control';

//   return (
//     <Card className={classes.login}>
//       <form onSubmit={submitHandler}>
//         <Input
//           id="email"
//           label="E-Mail"
//           type="email"
//           onChange={emailChangeHandler}
//           onBlur={emailBlurHandler}
//           value={emailValue}
//           className={emailClasses}
//         />
//         {emailHasError && <p className="error-text">Please enter a valid email address.</p>}
//         <Input
//         id="password"
//         label="Password"
//         type="password"
//         onChange = {passwordChangeHandler}
//         onBlur={passwordBlurHandler}
//         value={passwordValue}
//         className={passwordClasses}
//         />
//        {passwordHasError && <p className="error-text">Password should contain at least 6 characters.</p>}
//         <div className={classes.actions}>
//           <NavLink to="/home">
//             <Button type="submit" className={classes.btn}>
//               Login
//             </Button>
//           </NavLink>
//         </div>
//       </form>
//     </Card>
//   );
// };

// export default Login;
