import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const coursesSlice = createSlice({
	name: 'courses',
	initialState,
	reducers: {
		// setCourses: 
		// saveCourse: 
		// deleteCourse: 
		// updateCourse: 
	},
});

export const { setCourses, saveCourse, deleteCourse, updateCourse } =
	coursesSlice.actions;

export default coursesSlice.reducer;
