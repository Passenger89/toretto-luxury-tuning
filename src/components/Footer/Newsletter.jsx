import React from 'react';

import SubHeading from '../SubHeading/SubHeading.jsx';
import styles from './Newsletter.module.scss';

function Newsletter() {
	return (
		<div className={styles.newsletter}>
			<div className={`${styles.newsletter_heading} flex__center`}>
				<SubHeading title="Newsletter" />
				<h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
				<p className="p__opensans">And never miss the latest updates!</p>
			</div>
			<div className={`${styles.newsletter_input} flex__center`}>
				<input
					type="email"
					name=""
					id=""
					placeholder="Enter your email address"
				/>
				<button className="custom__button" type="button">
					Subscribe
				</button>
			</div>
		</div>
	);
}

export default Newsletter;
