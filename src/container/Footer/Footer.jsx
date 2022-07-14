/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { MdOutlineCopyright } from 'react-icons/md';

import FooterOverlay from '../../components/Footer/FooterOverlay.jsx';
import Newsletter from '../../components/Footer/Newsletter.jsx';
import styles from './Footer.module.scss';

function Footer() {
	const year = new Date().getFullYear();

	return (
		<div className={`${styles.footer} section__padding`}>
			<FooterOverlay />
			<Newsletter />

			<div className={styles.footer_links}>
				<div className={styles.footer_links_contact}>
					<h1 className={styles.footer_headtext}>Contact</h1>
					<p className="p__opensans_black">
						722 E Kensington Rd, Los Angeles, CA 90026
					</p>
					<p className="p__opensans_black">+1 212-344-1230</p>
					<p className="p__opensans_black">+1 212-555-1230</p>
				</div>
				<div className={styles.footer_links_logo}>
					<p className="p__opensans_black">
						"The best way to find yourself is to lose yourself in the service of
						others.”
					</p>

					<div className={styles.footer_links_icons}>
						<FiFacebook />
						<FiTwitter />
						<FiInstagram />
					</div>
				</div>
				<div className={styles.footer_links_work}>
					<h1 className={styles.footer_headtext}>Working Hours</h1>
					<p className="p__opensans_black">Monday-Friday:</p>
					<p className="p__opensans_black">08:00 am -12:00 am</p>
					<p className="p__opensans_black">Saturday-Sunday</p>
					<p className="p__opensans_black">07:00am -11:00 pm</p>
				</div>
			</div>
			<div className={styles.footer_copyright}>
				<p className="p__opensans_black">
					<MdOutlineCopyright />
					{` TLT ${year}. All Rights Reserved`}
				</p>
			</div>
		</div>
	);
}

export default Footer;
