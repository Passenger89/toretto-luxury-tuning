import React, { useRef } from 'react';
import {
	BsInstagram,
	BsArrowLeftShort,
	BsArrowRightShort,
} from 'react-icons/bs';
import Button from '../../components/Button/Button.jsx';
import images from '../../constants/images.js';
import styles from './Gallery.module.scss';

const galleryImages = [
	images.gallery01,
	images.gallery02,
	images.gallery03,
	images.gallery04,
	images.gallery05,
	images.gallery06,
	images.gallery07,
	images.gallery08,
];

function Gallery() {
	const scrollRef = useRef();

	const scroll = (direction) => {
		const { current } = scrollRef;

		if (direction === 'left') {
			current.scrollLeft -= 300;
		} else {
			current.scrollLeft += 300;
		}
	};

	return (
		<div className={`${styles.gallery} flex__center`}>
			<div className={styles.gallery_content}>
				<h1 className="headtext__cormorant_black">Photo Gallery</h1>
				<p className="p__opensans_black" style={{ marginTop: '2rem' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
					mattis ipsum turpis elit elit scelerisque egestas mu.
				</p>
				<Button text="View More" />
			</div>

			<div className={styles.gallery_images}>
				<div className={styles.gallery_images_container} ref={scrollRef}>
					{galleryImages.map((image, index) => (
						<div
							className={`${styles.gallery_images_card} flex__center`}
							key={`gallery_image-${index + 1}`}
						>
							<img src={image} alt="gallery" loading="lazy" />
							<BsInstagram className={styles.gallery_image_icon} />
						</div>
					))}
				</div>
				<div className={styles.gallery_images_arrows}>
					<BsArrowLeftShort
						className={styles.gallery_arrow_icon}
						onClick={() => scroll('left')}
					/>
					<BsArrowRightShort
						className={styles.gallery_arrow_icon}
						onClick={() => scroll('right')}
					/>
				</div>
			</div>
		</div>
	);
}

export default Gallery;
