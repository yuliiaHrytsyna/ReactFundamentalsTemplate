import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common";

export const AuthorItem = ({ authorName }) => (
  <div className={styles.authorItem} data-testid="authorItem">
    <span>{authorName}</span>
    <Button buttonText="+" data-testid="addAuthor" />
    <Button buttonText="-" data-testid="addAuthor" />

    {/* // reuse Button component for 'Add author' button with data-testid="addAuthor" attribute */}
  </div>
);
