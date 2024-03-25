// // Module 1. You don't need to do anything with this component (we had to comment this component for 1st module tests)

// // Module 2.
// // * uncomment this component (ctrl + a => ctrl + /)
// // * add functionality to create new course with:
// //   ** title
// //   ** description
// //   ** duration (user enters in minutes, you should map in format «hh:mm»)
// //   ** existing authors (use 'authorsList' prop)
// //   ** new created author (create field and button, update 'authorsList')
// //   ** user should be able to remove author from the course
// //   ** add validation to the fields
// //   ** add new course to the 'coursesList' and navigate to the '/courses' page => new course should be in the courses list
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-new-course

// // Module 3.
// // * save new course to the store. Use action 'saveCourse' from 'src/store/slices/coursesSlice'
// // * save new author to the store. Use action 'saveAuthor' from 'src/store/slices/authorsSlice'
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#add-new-course

// // Module 4.
// // * render this component only for ADMIN user
// // * in this module you should separate functionality for this component:
// //   ** create mode:
// //     * form for the course creation should be opened by 'courses/add' route by 'ADD NEW COURSE' button click (as before)
// //     * make a request to save new course
// //     * use 'createCourse' service from 'src/services.js' and 'createCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
// //     * use 'createAuthor ' service from 'src/services.js' and 'createAuthorThunk' thunk from 'src/store/thinks/authorsThunk.js'
// //     * save new course to the store after success response
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#add-new-course
// //   ** update mode:
// //     * form should be opened by route '/courses/update/:courseId' route by 'update' button click
// //     * appropriate forms field should be prefilled with course's info
// //     * user should have ability to modify course information in the fields and change authors list
// //     * make a request to save updated course
// //     * use 'updateCourseService' from 'src/services.js' and 'updateCourseThunk' thunk from 'src/store/thinks/coursesThunk.js'
// //     save updated course to the store after success response.
// // ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-4/home-task/components#update-course

// // Module 5:
// // * proposed cases for unit tests:
// //   ** CourseForm should show authors lists (all and course authors).
// //   **  CourseForm 'Create author' button click should call dispatch.
// //   **  CourseForm 'Add author' button click should add an author to the course authors list.
// //   **  CourseForm 'Delete author' button click should delete an author from the course list.

import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

import { Input } from "../../common/Input/Input";
import { CreateAuthor } from "./components/CreateAuthor/CreateAuhtor";
import { AuthorItem } from "./components/AuthorItem/AuthorItem";

import { getCourseDuration } from "../../helpers/getCourseDuration";

import { Button } from "../../common";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthorsSelector, getCoursesSelector } from "../../store/selectors";
import store from "../../store";
import {
  createCourseThunk,
  updateCourseThunk,
} from "../../store/thunks/coursesThunk";
// { authorsList, createCourse, createAuthor }

export const CourseForm = () => {
  const [durationMapped, setDurationMapped] = useState(0);
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [duration, setDuration] = useState();
  const [authors, setAuthors] = useState([]);
  const navigate = useNavigate();
  const authorsList = useSelector(getAuthorsSelector);
  const coursesList = useSelector(getCoursesSelector);
  const { courseId } = useParams();

  useEffect(() => {
    if (courseId) {
      const course = coursesList.find((item) => courseId === item.id);
      setTitle(course.title);
      setDescription(course.description);
      handleDurationChange(course.duration);
      const courseAuthors = [];
      course.authors.forEach((item) =>
        courseAuthors.push(authorsList.find((el) => el.id === item))
      );
      setAuthors(courseAuthors);
    }
  }, [authorsList, courseId, coursesList]);

  const handleDurationChange = (value) => {
    setDurationMapped(getCourseDuration(value));
    setDuration(value);
    console.log("duration");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const saveRequest = {
      title,
      description,
      duration: Number(duration),
      authors: authors.map((author) => author.id),
    };
    if (!courseId) {
      store.dispatch(
        createCourseThunk(saveRequest, localStorage.getItem("token"))
      );
    } else {
      const updateRequest = {
        ...saveRequest,
        id: courseId,
      };
      store.dispatch(
        updateCourseThunk(updateRequest, localStorage.getItem("token"))
      );
    }
    navigate("/courses");
  };

  const handleAuthorAdd = (e, author) => {
    e.preventDefault();
    setAuthors([...authors, author]);
  };

  return (
    <div className={styles.container}>
      <h2>Course edit or Create page</h2>

      <form onSubmit={handleSubmit}>
        {/* // reuse Input component for title field with data-testid="titleInput" */}
        <Input
          labelText={"Title"}
          placeholderText={"Input text"}
          name={"title"}
          type={"text"}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          data-testid="titleInput"
        />
        <label>
          Description
          <textarea
            className={styles.description}
            data-testid="descriptionTextArea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <div className={styles.infoWrapper}>
          <div>
            <div className={styles.duration}>
              <Input
                labelText={"Duration"}
                placeholderText={"Input text"}
                name={"duration"}
                type={"number"}
                value={duration}
                onChange={(e) => handleDurationChange(e.target.value)}
                data-testid="durationInput"
              />
              <p>{durationMapped}</p>
            </div>

            <h2>Authors</h2>
            <CreateAuthor />
            <div className={styles.authorsContainer}>
              <h3>Authors List</h3>
              {authorsList.map((author, i) => (
                <AuthorItem
                  name={author.name}
                  key={i}
                  handleClick={(e) => handleAuthorAdd(e, author)}
                />
              ))}
              {/* // use 'map' to display all available autors. Reuse 'AuthorItem' component for each author */}
            </div>
          </div>

          <div className={styles.courseAuthorsContainer}>
            <h2>Course authors</h2>
            {authors.length ? (
              authors.map((author, i) => (
                <AuthorItem name={author.name} key={i} />
              ))
            ) : (
              <p className={styles.notification}>List is empty</p>
            )}
            {/* // use 'map' to display course autors. Reuse 'AuthorItem' component for each author */}
            {/* <p className={styles.notification}>List is empty</p> */}
            {/* // display this
            paragraph if there are no authors in the course */}
          </div>
        </div>
      </form>

      <div className={styles.buttonsContainer}>
        <Button
          buttonText={"CANCEL"}
          handleClick={() => navigate("/courses")}
        />
        <Button
          buttonText={courseId ? "UPDATE COURSE" : "CREATE COURSE"}
          handleClick={handleSubmit}
          data-testid="createCourseButton"
        />
        {/* // reuse Button component for 'CREATE/UPDATE COURSE' button with
        // reuse Button component for 'CANCEL' button with */}
      </div>
    </div>
  );
};
