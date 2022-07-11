import React from 'react';
import PropTypes from 'prop-types';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import data from '../../constants/data.js';
import styles from './Laurels.module.scss';

function AwardCard({ award: { imgUrl, title, subtitle } }) {
	return (
		<div className={styles.laurels_awards_card}>
			<img src={imgUrl} alt="award" />
			<div className={styles.laurels_awards_card_content}>
				<p className="p__cormorant" style={{ color: '#DCCA87' }}>
					{title}
				</p>
				<p className="p__cormorant">{subtitle}</p>
			</div>
		</div>
	);
}

function Laurels() {
	return (
		<div className="app__bg app__wrapper section__padding" id="awards">
			<div className={styles.wrapper_info}>
				<SubHeading title="Awards & Recognition" />
				<h1 className="headtext__cormorant">Our Laurels</h1>

				<div className={styles.laurels_awards}>
					{data.awards.map((award) => (
						<AwardCard award={award} key={award.title} />
					))}
				</div>
			</div>

			<div className={styles.wrapper_img}>
				<img src={images.laurels} alt="laurels" />
			</div>
		</div>
	);
}

export default Laurels;

AwardCard.propTypes = {
	award: PropTypes.objectOf(PropTypes.string).isRequired,
	imgUrl: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};
