import React from 'react';

import styles from './styles.module.css';

export const Input = ({
  placeholderText,
  labelText,
  onChange
}) => (
<label>
	{labelText}
	<input onChange={onChange} placeholder={placeholderText} />
</label>
);
