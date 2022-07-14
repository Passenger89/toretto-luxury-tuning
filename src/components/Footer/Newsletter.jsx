import React from 'react';
import Button from '../Button/Button.jsx';

import styles from './Newsletter.module.scss';

function Newsletter() {
	return (
		<div className={styles.newsletter}>
			<div className={`${styles.newsletter_heading} flex__center`}>
				<h1 className="headtext__cormorant_black">
					Subscribe To Our Newsletter
				</h1>
				<p className="p__opensans_black">And never miss the latest updates!</p>
			</div>
			<div className={`${styles.newsletter_input} flex__center`}>
				<input
					type="email"
					name=""
					id=""
					placeholder="Enter your email address"
				/>
				<Button text="Subscribe" />
			</div>
		</div>
	);
}

export default Newsletter;
