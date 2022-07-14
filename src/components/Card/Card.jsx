import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Card.module.scss';

function Card({ article: { imgUrl, title, path } }) {
	return (
		<div className={styles.article_card}>
			<Link to={path}>
				<img src={imgUrl} alt="article" />
				<div className={styles.article_card_content}>
					<p className="p__cormorant_black">{title}</p>
				</div>
			</Link>
		</div>
	);
}

export default Card;

Card.propTypes = {
	article: PropTypes.objectOf(PropTypes.string).isRequired,
};
