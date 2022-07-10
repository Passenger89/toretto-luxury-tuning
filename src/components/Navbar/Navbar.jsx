import React from 'react';
import { Link } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../../features/toggleNav/toggleNavSlice.js';

import images from '../../constants/images.js';
import styles from './Navbar.module.scss';

function Navbar() {
	const navToggle = useSelector((state) => state.toggle.value);
	const dispatch = useDispatch();

	return (
		<nav className={styles.app__navbar}>
			<div className={styles.app__navbar_logo}>
				<img src={images.gericht} alt="app logo" />
			</div>
			<ul className={styles.app__navbar_ul}>
				<li className={styles.app__navbar_li}>
					<Link to="/home">Home</Link>
				</li>
				<li className={styles.navbar__li}>
					<Link to="/about">About</Link>
				</li>
				<li className={styles.navbar__li}>
					<Link to="/menu">Menu</Link>
				</li>
				<li className={styles.navbar__li}>
					<Link to="/awards">Awards</Link>
				</li>
				<li className={styles.navbar__li}>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>
			<div className={styles.app__navbar_login}>
				<Link to="/login" className={styles.login__link}>
					Log In / Register
				</Link>
				<div />
				<Link to="/" className={styles.bookTable__link}>
					Book Table
				</Link>
			</div>
			<div className={styles.app__navbar_smallscreen}>
				<GiHamburgerMenu
					color="#fff"
					fontSize={27}
					onClick={() => {
						dispatch(open());
					}}
				/>

				{navToggle && (
					<div
						className={`${styles.app__navbar_smallscreen_overlay} flex__center slide_down`}
					>
						<MdOutlineRestaurantMenu
							fontSize={27}
							className={styles.overlay__close}
							onClick={() => {
								dispatch(close());
							}}
						/>

						<ul className={styles.app__navbar_smallscreen_ul}>
							<li className={styles.navbar__li_smallscreen}>
								<Link to="/home">Home</Link>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<Link to="/about">About</Link>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<Link to="/menu">Menu</Link>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<Link to="/awards">Awards</Link>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
