/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../components/Button/Button.jsx';
import styles from '../scss/PageNotFound.module.scss';

function PageNotFound() {
	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>not found</h1>
			<p className={styles.paragraph}>
				We don't seem to have the parts for that...
			</p>
			<Link to="/">
				<Button text="Go Back" />
			</Link>
		</div>
	);
}

export default PageNotFound;
