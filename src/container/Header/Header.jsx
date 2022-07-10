import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import images from '../../constants/images.js';
import styles from './Header.module.scss';

function Header() {
	return (
		<div
			className={`${styles.wrapper} app__wrapper section__padding`}
			id="header"
		>
			<div className={styles.wrapper__info}>
				<SubHeading title="Chase the new flavour" />
				<h1 className={styles.info__h1}>The Key to Fine Dining</h1>
				<p className={`${styles.info__p} p__opensans`}>
					Sit tellus lobortis sed senectus vivamus molestie. Condimentum
					volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
					aliquam amet tellus
				</p>
				<button type="button" className="custom__button">
					Explore Menu
				</button>
			</div>
			<div className={styles.wrapper__image}>
				<img src={images.welcome} alt="header" />
			</div>
		</div>
	);
}

export default Header;
