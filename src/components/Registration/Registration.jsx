// Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-219&mode=design&t=0FIG0iRzKcD0s16M-0
// * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-257&mode=design&t=0FIG0iRzKcD0s16M-0
// * render this component by route '/registration'
// * submit form data and make POST API request '/registration'.
// * after successful registration navigates to '/login' route.
// * component should have a link to the Login page (see design)
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#registration-new-component

import React from "react";

import { Link, useNavigate } from "react-router-dom";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";

import styles from "./styles.module.css";

import { createUser } from "../../services";

export const Registration = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const target = e.target;
    const formData = {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
    };
    const result = await createUser(formData);
    if (result.successful) {
      return navigate("/login");
    }
  };

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            labelText={"Name"}
            placeholderText={"Input text"}
            name={"name"}
            type={"text"}
          />
          <Input
            labelText={"Email"}
            placeholderText={"Input text"}
            name={"email"}
            type={"email"}
          />
          <Input
            labelText={"Password"}
            placeholderText={"Input text"}
            name={"password"}
            type={"password"}
          />
          <Button buttonText={"LOGIN"} handleSubmit={handleSubmit} />
        </form>
        <p>
          If you have an account you may <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};
