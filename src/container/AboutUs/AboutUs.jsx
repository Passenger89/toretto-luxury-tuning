import React from 'react';
import Button from '../../components/Button/Button.jsx';
import images from '../../constants/images.js';
import styles from './AboutUs.module.scss';

function AboutUs() {
	return (
		<div
			className={`${styles.aboutus} app__bg flex__center section__padding`}
			id="about"
		>
			<div className={`${styles.aboutus_content} flex__center`}>
				<div className={`${styles.aboutus_content_about}`}>
					<h1 className="headtext__cormorant_white">About Us</h1>

					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						pharetra adipiscing ultrices vulputate posuere tristique. In sed
						odio nec aliquet eu proin mauris et.
					</p>
					<Button text="Know More" />
				</div>

				<div className={`${styles.aboutus_content_nitron} flex__center`}>
					<img src={images.nitron} alt="about_nitron" />
				</div>

				<div className={`${styles.aboutus_content_history}`}>
					<h1 className="headtext__cormorant_white">Our History</h1>

					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						pharetra adipiscing ultrices vulputate posuere tristique. In sed
						odio nec aliquet eu proin mauris et.
					</p>
					<Button text="Know More" />
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
