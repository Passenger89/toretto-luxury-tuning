import { configureStore } from '@reduxjs/toolkit';
import toggleNavReducer from '../features/toggleNav/toggleNavSlice.js';
import playVideoReducer from '../features/playVideo/playVideoSlice.js';
import displayScrollButtonReducer from '../features/scrollToTop/displayScrollButtonSlice.js';

const store = configureStore({
	reducer: {
		toggleNav: toggleNavReducer,
		toggleVideo: playVideoReducer,
		toggleScrollButton: displayScrollButtonReducer,
	},
});

export default store;
