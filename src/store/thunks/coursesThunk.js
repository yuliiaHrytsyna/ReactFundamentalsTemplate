import {
  createCourse,
  deleteCourseService,
  getCourses,
  updateCourseService,
} from "../../services";

export const deleteCourseThunk = (courseId) => {
  return async (dispatch) => {
    await deleteCourseService(courseId);

    dispatch({
      type: "courses/deleteCourse",
      payload: courseId,
    });
  };
};

export const createCourseThunk = (course) => {
  return async (dispatch) => {
    const course1 = await createCourse(course);

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

export const updateCourseThunk = (course, id) => {
  return async (dispatch) => {
    const updatedCourse = await updateCourseService(course, id);

    dispatch({
      type: "courses/updateCourse",
      payload: { course: updatedCourse, id },
    });
  };
};
