import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './App/store.js';
import App from './App/App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);