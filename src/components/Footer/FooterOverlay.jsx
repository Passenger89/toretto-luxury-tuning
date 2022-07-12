import React from 'react';

import styles from './FooterOverlay.module.scss';

function FooterOverlay() {
	return (
		<div className={styles.FooterOverlay}>
			<div className={styles.FooterOverlay_black} />
			<div className={`${styles.FooterOverlay_img} app__bg`} />
		</div>
	);
}

export default FooterOverlay;
