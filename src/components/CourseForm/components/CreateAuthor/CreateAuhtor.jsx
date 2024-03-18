import React from "react";
import styles from "./styles.module.css";

import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common";

export const CreateAuthor = ({ onCreateAuthor }) => {
  // write your code here
  return (
    <div className={styles.newAuthorContainer}>
      {/* <h2>Add author</h2> */}
      <Input
        labelText={"Author Name"}
        placeholderText={"Input text"}
        name={"authorName"}
        type={"text"}
        data-testid={"createAuthorInput"}
      />
      <Button buttonText={"CREATE AUTHOR"} data-testid={"createAuthorButton"} />
      {/* // reuse Input component with data-testid="createAuthorInput" attribute
      //reuse Button component with data-testid="createAuthorButton" attribute */}
    </div>
  );
};
