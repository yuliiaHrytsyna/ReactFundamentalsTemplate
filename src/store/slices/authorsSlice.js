import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const authorsSlice = createSlice({
	name: 'authors',
	initialState,
	reducers: {
		// setAuthors: 
		// saveAuthor: 
	},
});

export const { setAuthors, saveAuthor } = authorsSlice.actions;

export default authorsSlice.reducer;
