import React, { useEffect } from "react";

import styles from "./styles.module.css";

import { Button } from "../../common";
import { CourseCard } from "./components/CourseCard/CourseCard";
import { EmptyCourseList } from "./components";

import { Outlet, useNavigate, useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthorsSelector, getCoursesSelector } from "../../store/selectors";
// Module 1:
// * render list of components using 'CourseCard' component for each course
// * render 'ADD NEW COURSE' button (reuse Button component)
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#courses-component
// * render EmptyCourseList component when no courses
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#emptycourselist-component

// Module 2:
// * render this component by route '/courses'
// * navigate to this component if 'localStorage' contains user's token
// * navigate to the route courses/add by clicking Add New Course button.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#courses

// Module 3:
// * stop using mocked courses and authors data
// * delete props 'coursesList' and 'authorsList'
// * use useSelector to get courses and authors from the store. Use selectors...
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#courses-component

// Module 4:
// navigate to '/courses/add' route by clicking 'ADD NEW COURSE' button in the 'EmptyCourseList'.
// show message 'You don't have permissions to create a course. Please log in as ADMIN' by clicking ADD NEW COURSE button in the 'EmptyCourseList'.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#emptycourselist-component

// Module 5:
// * proposed cases for unit tests:
//   ** Courses should display amount of CourseCard equal length of courses array.
//   ** CourseForm should be shown after a click on the "Add new course" button.

export const Courses = ({ handleShowCourse }) => {
  const navigate = useNavigate();
  const { courseId } = useParams();

  const coursesList = useSelector(getCoursesSelector);
  const authorsList = useSelector(getAuthorsSelector);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/login");
    }
  }, [navigate]);

  const openInfo = (value) => {
    navigate(`/courses/${value}`);
  };

  let content;
  if (!!coursesList.length) {
    content = coursesList.map((course, i) => (
      <CourseCard
        key={i}
        course={course}
        authorsList={authorsList}
        handleShowCourse={(value) => openInfo(value)}
      />
    ));
  } else {
    content = <EmptyCourseList />;
  }

  const cardList = (
    <>
      <div className={styles.panel}>
        <Button
          buttonText={<Link to="/courses/add">ADD NEW COURSE</Link>}
          data-testid="createCourseButton"
        />
      </div>
      {content}
    </>
  );

  return (
    <>
      <div className={styles.container}>
        {!courseId && window.location.pathname.indexOf("/add") === -1 ? (
          cardList
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
};
