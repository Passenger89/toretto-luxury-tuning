import React from 'react';
import PropTypes from 'prop-types';

import images from '../../constants/images.js';

function SubHeading({ title }) {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<p className="p__cormorant">{title}</p>
			<img src={images.spoon} alt="spoon" className="spoon__img" />
		</div>
	);
}

export default SubHeading;

SubHeading.propTypes = {
	title: PropTypes.string.isRequired,
};
