import React from 'react';

import styles from './styles.module.css';

// Module 1:
// * render list of components using 'CourseCard' component for each course
// * render 'ADD NEW COURSE' button (reuse Button component)
// * render EmptyCourseList component when no courses

// Module 2:
// * render this component by route '/registration'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking Add New Course button.

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store. Use selectors...

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses = ({coursesList, authorsList, handleShowCourse}) => {

	// write your code here

	// for EmptyCourseList component container use data-testid="emptyContainer" attribute
	// for button in EmptyCourseList component add data-testid="addCourse" attribute

	return (
		<>
			<div className={styles.panel}>
				// reuse Button component for 'ADD NEW COURSE' button
			</div>
			
			// use '.map' array method to render all courses. Use CourseCard component
		</>
	);
};
