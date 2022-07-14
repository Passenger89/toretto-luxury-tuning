import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ text }) {
	return (
		<button type="button" className={styles.button}>
			{text}
		</button>
	);
}

export default Button;

Button.propTypes = {
	text: PropTypes.string.isRequired,
};
