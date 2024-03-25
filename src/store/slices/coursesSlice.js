import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    setCourses: (state, { payload }) => (state = payload),
    saveCourse: (state, { payload }) => [...state, payload],
    deleteCourse: (state, { payload }) =>
      state.filter((item) => item.id !== payload),
    updateCourse: (state, { payload }) => {
      const filtered = state.filter((item) => item.id !== payload.course.id);
      return [...filtered, payload.course];
    },
  },
});

// use these actions in your components / thunks
export const { setCourses, saveCourse, deleteCourse, updateCourse } =
  coursesSlice.actions;

export default coursesSlice.reducer;
