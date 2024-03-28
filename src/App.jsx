import React, { useEffect, useState } from "react";

import styles from "./App.module.css";

import {
  Header,
  Login,
  Registration,
  Courses,
  CourseInfo,
  CourseForm,
  PrivateRoute,
} from "./components";

import { Routes, Route, Navigate } from "react-router-dom";
import store from "./store/index";
import { getCoursesThunk } from "./store/thunks/coursesThunk";
import { getAuthorsThunk } from "./store/thunks/authorsThunk";
import { getUserThunk } from "./store/thunks/userThunk";
// Module 1:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * add next components to the App component: Header, Courses and CourseInfo
// * pass 'mockedAuthorsList' and 'mockedCoursesList' to the Courses and CourseInfo components

// Module 2:
// * use mockedAuthorsList and mockedCoursesList mocked data
// * wrap your App with BrowserRouter in src/index.js
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#add-the-router-to-the-app-component

// Module 3:
// * wrap your App with Redux Provider in src/index.js
// * remove 'mockedAuthorsList' and 'mockedCoursesList' constants amd import and their use throughout the project
// * get courses and authors from the server. Use courses/all and authors/all GET requests.
// * save courses and authors to the store. Use 'setCourses' and 'setAuthors' actions from appropriate slices here 'src/store/slices'
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#app-component

// Module 4:
// * rewrite old GET requests /courses/all with 'getCoursesThunk' from 'src/store/thunks/coursesThunk.js' using getCourses service from 'src/services.js'.
// * rewrite old GET requests /authors/all with 'getAuthorsThunk' from 'src/store/thunks/authorsThunk.js' using getAuthors service from 'src/services.js'.
// * wrap 'CourseForm' in the 'PrivateRoute' component

function App() {
  const [element, setElement] = useState();
  const fetchInitialData = async () => {
    store.dispatch(getCoursesThunk());
    store.dispatch(getAuthorsThunk());
    if (localStorage.getItem("token")) {
      store.dispatch(getUserThunk(localStorage.getItem("token")));
    }
  };
  useEffect(() => {
    fetchInitialData();
    const hasToken = !!localStorage.getItem("token");
    setElement(hasToken ? <Navigate to="/courses" /> : <Login />);
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header />
      <Routes>
        <Route path="/" element={element} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses" element={<Courses />}>
          <Route path=":courseId" element={<CourseInfo />} />
          <Route
            path="add"
            element={<PrivateRoute content={<CourseForm />} />}
          />
          <Route
            path="update/:courseId"
            element={<PrivateRoute content={<CourseForm />} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
