import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common";

export const AuthorItem = ({ name }) => (
  <div className={styles.authorItem} data-testid="authorItem">
    <span>{name}</span>
    <Button buttonText="+" data-testid="addAuthor" />

    {/* // reuse Button component for 'Add author' button with data-testid="addAuthor" attribute */}
  </div>
);
