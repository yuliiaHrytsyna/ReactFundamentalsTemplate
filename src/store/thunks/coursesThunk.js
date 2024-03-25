import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";

export const deleteCourseThunk = (courseId, token) => {
  return async (dispatch) => {
    await deleteCourseService(courseId, token);

    dispatch({
      type: "courses/deleteCourse",
      payload: courseId,
    });
  };
};

export const createCourseThunk = (course, token) => {
  return async (dispatch) => {
    const course1 = await createCourse(course, token);

    dispatch({
      type: "courses/saveCourse",
      payload: course1,
    });
  };
};

export const getCoursesThunk = () => {
  return async (dispatch) => {
    const courses = await getCourses();

    dispatch({
      type: "courses/setCourses",
      payload: courses.result,
    });
  };
};

export const updateCourseThunk = (course, token) => {
  return async (dispatch) => {
    const updatedCourse = await updateCourseService(course, token);

    dispatch({
      type: "courses/updateCourse",
      payload: { course: updatedCourse },
    });
  };
};
