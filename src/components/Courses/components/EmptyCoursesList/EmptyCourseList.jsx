import React from "react";
import { Button } from "../../../../common";

import styles from "./styles.module.css";

import { Link } from "react-router-dom";

export const EmptyCourseList = () => {
  return (
    <>
      <div className={styles.container}>
        <h2>Your List Is Empty</h2>
        <p>Please use "Add New Course" button to add your first course</p>
        <Button
          data-testid="addCourse"
          buttonText={<Link to="/courses/add">ADD NEW COURSE</Link>}
        />
      </div>
    </>
  );
};
