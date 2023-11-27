import React from 'react';

import styles from './styles.module.css';

// Module 1:
// * add Logo and Button components
// * add Header component to the App component

// Module 2:
// * show user's name if he is logged in.
// * navigate to the /login route after 'LOGOUT' button click
// * remove token from the localStorage after log out.
// * hide 'LOGOUT' button and user's name for Login and Registration pages

// Module 3:
// * get user's name from the store. Use selector...
// * remove user's data from the store. Use action 'removeUserData' from the 'src/store/slices/userSlice by LOGOUT button click
// * remove token from localStorage by LOGOUT button click.

// Module 4:
// make a request to lod out on 'LOGOUT' button click
// use thunk 'logoutThunk' from 'src/store/thunks/userThunk.js' and service 'logout' from 'src/services.js'

// Module 5:
// *proposed cases for unit tests:
//   ** Header should have logo and user's name.

export const Header = () => {
	
	// write your code here

	return (
		<div className={styles.headerContainer}>

			// use Logo component

			<div className={styles.userContainer}>
				<p className={styles.userName}>Harry Potter</p>
				
				// reuse Button component for 'Login / Logout' button

			</div>
		</div>
	);
};
