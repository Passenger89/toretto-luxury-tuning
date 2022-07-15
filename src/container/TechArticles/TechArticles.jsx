import React from 'react';

import data from '../../constants/data.js';
import styles from './TechArticles.module.scss';
import Card from '../../components/Card/Card.jsx';

function TechArticles() {
	return (
		<div
			className={`${styles.techArticles} flex__center section__padding`}
			id="menu"
		>
			<div className={styles.techArticles_title}>
				<h1 className={`${styles.h1} headtext__cormorant_black`}>
					Tech Article
				</h1>
			</div>

			<div className={styles.techArticles_cards}>
				{data.articles.map((article, i) => (
					<Card article={article} key={`card${i + 1}`} />
				))}
			</div>
		</div>
	);
}

export default TechArticles;
