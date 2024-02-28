import React from "react";

import styles from "./styles.module.css";

import logo from "../../../../assets/logo.svg";

// Module 1:
// * add logo.svg as a logo image
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#logo-component

export const Logo = () => <img className={styles.logo} alt="logo" src={logo} />;
