import React from 'react';
import { NavLink } from 'react-router-dom';

import { GiHamburgerMenu } from 'react-icons/gi';
import { RiToolsFill } from 'react-icons/ri';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../../features/toggleNav/toggleNavSlice.js';

import images from '../../constants/images.js';
import styles from './Navbar.module.scss';

function Navbar() {
	const navToggle = useSelector((state) => state.toggleNav.value);
	const dispatch = useDispatch();

	const classNameFunc = ({ isActive }) => (isActive ? styles.active : '');

	return (
		<nav className={styles.app__navbar}>
			<div className={styles.app__navbar_logo}>
				<img src={images.mainlogo} alt="app logo" />
			</div>
			<ul className={styles.app__navbar_ul}>
				<li className={styles.app__navbar_li}>
					<NavLink to="/" className={classNameFunc}>
						Home
					</NavLink>
				</li>
				<li className={styles.app__navbar_li}>
					<NavLink to="/about" className={classNameFunc}>
						About
					</NavLink>
				</li>
				<li className={styles.app__navbar_li}>
					<NavLink to="/quote" className={classNameFunc}>
						Quote
					</NavLink>
				</li>
				<li className={styles.app__navbar_li}>
					<NavLink to="/awards" className={classNameFunc}>
						Awards
					</NavLink>
				</li>
				<li className={styles.app__navbar_li}>
					<NavLink to="/contact" className={classNameFunc}>
						Contact
					</NavLink>
				</li>
			</ul>
			<div className={styles.app__navbar_login}>
				<NavLink to="/" className={styles.login__link}>
					Log In / Register
				</NavLink>
				<div />
				<NavLink to="/" className={styles.bookTable__link}>
					Book Appointment
				</NavLink>
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
						<RiToolsFill
							fontSize={27}
							className={styles.overlay__close}
							onClick={() => {
								dispatch(close());
							}}
						/>

						<ul className={styles.app__navbar_smallscreen_ul}>
							<li className={styles.navbar__li_smallscreen}>
								<NavLink to="/">Home</NavLink>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<NavLink to="/about">Features</NavLink>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<NavLink to="/menu">Quote</NavLink>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<NavLink to="/awards">Awards</NavLink>
							</li>
							<li className={styles.navbar__li_smallscreen}>
								<NavLink to="/contact">Contact</NavLink>
							</li>
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
}

export default Navbar;
