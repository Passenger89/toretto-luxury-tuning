import { configureStore } from '@reduxjs/toolkit';
import toggleNavReducer from '../features/toggleNav/toggleNavSlice.js';

const store = configureStore({
	reducer: {
		toggle: toggleNavReducer,
	},
});

export default store;
