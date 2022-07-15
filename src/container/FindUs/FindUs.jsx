import React from 'react';
import Button from '../../components/Button/Button.jsx';

import styles from './FindUs.module.scss';

function FindUs() {
	return (
		<div
			className={`${styles.findUs} app__bg app__wrapper section__padding`}
			id="contact"
		>
			<div className={`${styles.wrapper_info}`}>
				<h1
					className="headtext__cormorant_white"
					style={{ marginBottom: '3rem' }}
				>
					Find Us
				</h1>
				<div className="app__wrapper_content" style={{ marginBottom: '2rem' }}>
					<p className="p__cormorant" style={{ margin: '2rem 0' }}>
						Opening Hours
					</p>
					<p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
					<p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
				</div>
				<Button text="Visit Us" />
			</div>

			<div className="app__wrapper_img">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.024916568047!2d-118.25363558533472!3d34.06887552430187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c6fe34230bed%3A0x7038aa7766af074d!2s722%20E%20Kensington%20Rd%2C%20Los%20Angeles%2C%20CA%2090026%2C%20USA!5e0!3m2!1sen!2smx!4v1657734080881!5m2!1sen!2smx"
					width="600"
					height="450"
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="map"
					style={{ border: 0 }}
				/>
			</div>
		</div>
	);
}

export default FindUs;
