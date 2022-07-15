import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from '../components/Navbar/Navbar.jsx';
import ScrollToTopButton from '../components/ScrollToTopButton/ScrollToTopButton.jsx';
import Footer from '../container/Footer/Footer.jsx';

import Home from '../Pages/Home.jsx';
import PageNotFound from '../Pages/PageNotFound.jsx';
import '../scss/main.scss';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
				<Footer />
				<ScrollToTopButton />
			</Router>
		</div>
	);
}

export default App;
