import React from 'react';
import PropTypes from 'prop-types';

import styles from './MenuItem.module.scss';

function MenuItem({ title, price, tags }) {
	return (
		<div className={styles.menuItem}>
			<div className={styles.menuItem_head}>
				<div className={styles.menuItem_name}>
					<p className="p__cormorant" style={{ color: '#DCCA87' }}>
						{title}
					</p>
				</div>

				<div className={styles.menuItem_dash} />

				<div className={styles.menuItem_price}>
					<p className="p__cormorant">{price}</p>
				</div>
			</div>

			<div className={styles.menuItem_sub}>
				<p className="p__opensans" style={{ color: '#AAA' }}>
					{tags}
				</p>
			</div>
		</div>
	);
}

export default MenuItem;

MenuItem.propTypes = {
	title: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	tags: PropTypes.string.isRequired,
};
