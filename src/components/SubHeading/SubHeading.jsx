import React from 'react';
import PropTypes from 'prop-types';

function SubHeading({ title }) {
	return (
		<div style={{ marginBottom: '1rem' }}>
			<p className="p__cormorant">{title}</p>
		</div>
	);
}

export default SubHeading;

SubHeading.propTypes = {
	title: PropTypes.string.isRequired,
};
