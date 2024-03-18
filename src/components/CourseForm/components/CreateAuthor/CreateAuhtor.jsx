import React, { useState } from "react";
import styles from "./styles.module.css";

import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common";
import { useDispatch } from "react-redux";
import { saveAuthor } from "../../../../store/slices/authorsSlice";

export const CreateAuthor = ({ onCreateAuthor }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState();

  const addAuthor = (e) => {
    e.preventDefault();
    dispatch(saveAuthor({ name, id: `${name}_id` }));
  };
  return (
    <div className={styles.newAuthorContainer}>
      {/* <h2>Add author</h2> */}
      <Input
        labelText={"Author Name"}
        placeholderText={"Input text"}
        name={"authorName"}
        type={"text"}
        data-testid={"createAuthorInput"}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Button
        buttonText={"CREATE AUTHOR"}
        data-testid={"createAuthorButton"}
        handleClick={addAuthor}
      />
      {/* // reuse Input component with data-testid="createAuthorInput" attribute
      //reuse Button component with data-testid="createAuthorButton" attribute */}
    </div>
  );
};
