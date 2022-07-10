import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading.jsx';
import MenuItem from '../../components/MenuItem/MenuItem.jsx';

import images from '../../constants/images.js';
import data from '../../constants/data.js';
import styles from './SpecialMenu.module.scss';

function SpecialMenu() {
	return (
		<div
			className={`${styles.specialMenu} flex__center section__padding`}
			id="menu"
		>
			<div className={styles.specialMenu_title}>
				<SubHeading title="Menu That Fits Your Palette" />
				<h1 className="headtext__cormorant">Today's Special</h1>
			</div>

			<div className={styles.specialMenu_menu}>
				<div className={`${styles.specialMenu_menu_wine} flex__center`}>
					<p className={styles.specialMenu_menu_heading}>Wine & Beer</p>
					<div className={styles.specialMenu_menu_items}>
						{data.wines.map((item, index) => (
							<MenuItem
								key={item.title + index}
								title={item.title}
								price={item.price}
								tags={item.tags}
							>
								{item.title}
							</MenuItem>
						))}
					</div>
				</div>

				<div className={styles.specialMenu_menu_img}>
					<img src={images.menu} alt="cocktail shaker lemon and lime" />
				</div>

				<div className={`${styles.specialMenu_menu_cocktails} flex__center`}>
					<p className={styles.specialMenu_menu_heading}>Cocktails</p>
					<div className={styles.specialMenu_menu_items}>
						{data.cocktails.map((item, index) => (
							<MenuItem
								key={item.title + index}
								title={item.title}
								price={item.price}
								tags={item.tags}
							>
								{item.title}
							</MenuItem>
						))}
					</div>
				</div>
			</div>

			<div style={{ marginTop: '15px' }}>
				<button type="button" className="custom__button">
					View More
				</button>
			</div>
		</div>
	);
}

export default SpecialMenu;
