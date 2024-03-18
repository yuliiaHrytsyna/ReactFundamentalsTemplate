// // Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2927-216&mode=design&t=0FIG0iRzKcD0s16M-0
// // * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-191&mode=design&t=0FIG0iRzKcD0s16M-0
// // * render this component by route '/login'
// // * use login service to submit form data and make POST API request '/login'.
// // * component should have a link to the Registration page (see design)
// // * save token from API after success login to localStorage.
// // ** PAY ATTATION ** token should be saved to localStorage inside login handler function after login service responce
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#login-new-component

// // Module 3.
// // * save user's name, token and email to the store after success login.
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#login-component

import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";

import styles from "./styles.module.css";

import { login } from "../../services";
import { useDispatch } from "react-redux";
import { setUserData } from "../../store/slices/userSlice";

export const Login = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: emailValue,
      password: passwordValue,
    };

    const result = await login(data);
    localStorage.setItem("token", result.result);
    const userData = {
      isAuth: result.successful,
      name: result.user.name,
      email: result.user.email,
      token: result.result,
    };
    dispatch(setUserData(userData));
    return navigate("/courses");
  };

  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText={"Email"}
            placeholderText={"Input text"}
            name={"email"}
            type={"email"}
            value={emailValue}
            onChange={(e) => handleEmailChange(e)}
          />
          <Input
            labelText={"Password"}
            placeholderText={"Input text"}
            name={"password"}
            type={"password"}
            value={passwordValue}
            onChange={(e) => handlePasswordChange(e)}
          />
          <Button buttonText={"LOGIN"} handleSubmit={handleSubmit} />
        </form>
        <p>
          If you don't have an account you can
          <Link to={"/registration"}>Registration</Link>
        </p>
      </div>
    </div>
  );
};
