import React from 'react';

export const CourseCard = ({course}) => {

		// write your code here

	return (
		<div className={styles.cardContainer} data-testid='courseCard'>
			<div className={styles.cardText}>
				<h2>Title</h2>
				<p>Description</p>
			</div>
			<div className={styles.cardDetails}>
				<p>
					<b>Authors: </b>
					authors list
				</p>
				<p>
					<b>Duration:</b>
					<span>duration</span>
				</p>
				<p>
					<b>Created: </b>
					<span>date</span>
				</p>
				<div>
					
					// reuse Button component for 'Show course' button
					// reuse Button component for 'Delete' button
					// reuse Button component for 'Update' button

				</div>
			</div>
		</div>
	);
};
