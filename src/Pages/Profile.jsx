import React from 'react';
import { useNavigate } from 'react-router-dom';

function Profile() {
	const navigate = useNavigate();
	return (
		<div>
			THIS IS THE PROFILE PAGE
			<button type="button" onClick={() => navigate('/about')}>
				About Page
			</button>
		</div>
	);
}

export default Profile;
