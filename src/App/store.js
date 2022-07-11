import { configureStore } from '@reduxjs/toolkit';
import toggleNavReducer from '../features/toggleNav/toggleNavSlice.js';
import playVideoReducer from '../features/playVideo/playVideoSlice.js';

const store = configureStore({
	reducer: {
		toggleNav: toggleNavReducer,
		toggleVideo: playVideoReducer,
	},
});

export default store;
