import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading.jsx';

import styles from './Header.module.scss';

function Header() {
	return (
		<div
			className={`${styles.wrapper} app__header app__wrapper section__padding`}
			id="header"
		>
			<div className={styles.wrapper__info}>
				<SubHeading />
				<h1 className={styles.info__h1}>The Key to Fine Dining</h1>
			</div>
			<div className={styles.wrapper__image}>
				<img src="/" alt="" />
			</div>
		</div>
	);
}

export default Header;
