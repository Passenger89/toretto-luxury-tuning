import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import Button from '../../components/Button/Button.jsx';
import styles from './Header.module.scss';

function Header() {
	return (
		<div
			className={`${styles.wrapper} app__wrapper section__padding`}
			id="header"
		>
			<div className={styles.wrapper__info}>
				<SubHeading title="in the US, Europe, Russia, Japan, Australia" />
				<h1 className={styles.info__h1}>Luxury Car Tuning</h1>

				<Button text="Get a Quote" />
			</div>
		</div>
	);
}

export default Header;
