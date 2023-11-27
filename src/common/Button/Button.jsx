import React from 'react';

import styles from './styles.module.css';

// Module 1:
// * use this component in components: Header, Courses

export const Button = ({buttonText, handleClick, 'data-testid': dataTestId}) => (
  <button
    className={styles.button}
    onClick={handleClick}
    data-testid={dataTestId}
  >
    {buttonText}
  </button>
);
