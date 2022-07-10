/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	value: false,
};

export const openNavSlice = createSlice({
	name: 'toggle',
	initialState,
	reducers: {
		open: (state) => {
			//* Redux Toolkit allows us to write "mutating" logic in reducers. It
			//* doesn't actually mutate the state because it uses the Immer library,
			//* which detects changes to a "draft state" and produces a brand new
			//* immutable state based off those changes
			state.value = true;
		},
		close: (state) => {
			state.value = false;
		},
	},
});

//* Action creators are generated for each case reducer function
export const { open, close } = openNavSlice.actions;

export default openNavSlice.reducer;
