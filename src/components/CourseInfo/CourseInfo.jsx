// This component shows information about the current chosen course.

// Module 1.
// * Use template to show course's information:
	// ** ID of course;
	// ** Title;
	// ** Description;
	// ** Duration;
	// ** List of authors;
	// ** Creation date;
// * use <Button /> component to replace CourseInfo component with Courses component

// Module 2.
// * render component by route '/courses/:courseId'
// * use 'useParam' hook to get course id, remove prop 'showCourseId'
// * use '<Link />' instead <Button /> component for 'BACK' button

import React from 'react';

import { formatCreationDate, getCourseDuration } from '../../helpers';

import styles from './styles.module.css';


// props description
// * 'coursesList' - list of all courses. You need it to get chosen course from the list
// * 'authorsList' - list of all authors. You need it to get authors' names for cjosen course
// * 'showCourseId' - id of chosen course. Use it to find needed course on the 'coursesList'.
export const CourseInfo = ({coursesList, authorsList, onBack, showCourseId}) => {

	// write your code here

	return (
		<div data-testid='courseInfo'>
			// Module 1: reuse Button component for 'onBack' functionality 
			// Module 2: use 'react-router-dom' 'Link' component for button 'Back'

			<h1>Course title</h1>
			<div className={styles.courseInfo}>
				<p className={styles.description}>{description}</p>
				<div>
					<p>
						<b>ID: </b>
						id
					</p>
					<p>
						<b>Duration: </b>
						duration
					</p>
					<p>
						<b>Created: </b>
						creation date
					</p>
					<div>
						<b>Authors</b>
						<ul className={styles.authorsList}>
							//use '.map' to render authors list with 'li' tag
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};
