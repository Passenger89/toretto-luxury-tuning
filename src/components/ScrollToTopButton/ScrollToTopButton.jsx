import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BsArrowUpSquareFill } from 'react-icons/bs';
import {
	toggleOn,
	toggleOff,
} from '../../features/scrollToTop/displayScrollButtonSlice.js';

import styles from './ScrollToTopButton.module.scss';

function BackToTopButton() {
	const scrollButtonValue = useSelector(
		(state) => state.toggleScrollButton.value
	);
	const dispatch = useDispatch();

	useEffect(() => {
		window.addEventListener(
			'scroll',
			() => {
				if (window.scrollY > 100) {
					dispatch(toggleOn());
				} else {
					dispatch(toggleOff());
				}
			},
			{ passive: true }
		);
	}, []);

	const scrollUp = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<div className={styles.wrapper}>
			{scrollButtonValue && (
				<button type="button" className={styles.button} onClick={scrollUp}>
					<BsArrowUpSquareFill className={styles.icon} size={30} />
				</button>
			)}
		</div>
	);
}

export default BackToTopButton;
