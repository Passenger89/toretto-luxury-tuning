import React from 'react';
import images from '../../constants/images.js';
import styles from './AboutUs.module.scss';

function AboutUs() {
	return (
		<div
			className={`${styles.aboutus} app__bg flex__center section__padding`}
			id="about"
		>
			<div className={`${styles.aboutus_overlay} flex__center`}>
				<img src={images.G} alt="g letter" />
			</div>
			<div className={`${styles.aboutus_content} flex__center`}>
				<div className={`${styles.aboutus_content_about}`}>
					<h1 className="headtext__cormorant">About Us</h1>
					<img src={images.spoon} alt="about_spoon" className="spoon__img" />
					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						pharetra adipiscing ultrices vulputate posuere tristique. In sed
						odio nec aliquet eu proin mauris et.
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>

				<div className={`${styles.aboutus_content_knife} flex__center`}>
					<img src={images.knife} alt="about_knife" />
				</div>

				<div className={`${styles.aboutus_content_history}`}>
					<h1 className="headtext__cormorant">Our History</h1>
					<img
						src={images.spoon}
						alt="about_spoon"
						className="spoon__img spoon__flipped"
					/>
					<p className="p__opensans">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
						pharetra adipiscing ultrices vulputate posuere tristique. In sed
						odio nec aliquet eu proin mauris et.
					</p>
					<button type="button" className="custom__button">
						Know More
					</button>
				</div>
			</div>
		</div>
	);
}

export default AboutUs;
