import React from 'react';

import AboutUs from '../container/AboutUs/AboutUs.jsx';
import FindUs from '../container/FindUs/FindUs.jsx';
import Gallery from '../container/Gallery/Gallery.jsx';
import Header from '../container/Header/Header.jsx';
import Intro from '../container/Intro/Intro.jsx';
import Laurels from '../container/Laurels/Laurels.jsx';
import TechArticles from '../container/TechArticles/TechArticles.jsx';

function Home() {
	return (
		<div>
			<Header />
			<AboutUs />
			<TechArticles />
			<Intro />
			<Laurels />
			<Gallery />
			<FindUs />
		</div>
	);
}

export default Home;
