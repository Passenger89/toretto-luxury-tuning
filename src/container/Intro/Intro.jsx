import React, { useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import styles from './Intro.module.scss';
import { play, pause } from '../../features/playVideo/playVideoSlice.js';
import { video } from '../../constants/index.js';

function Intro() {
	const toggleVideo = useSelector((state) => state.toggleVideo.value);
	const dispatch = useDispatch();
	const videoRef = useRef();

	const handleVideo = () => {
		dispatch(toggleVideo ? pause() : play());

		if (toggleVideo) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	};
	const handleVideoKeyPress = () => {
		dispatch(toggleVideo ? pause() : play());

		if (toggleVideo) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	};

	return (
		<div className={styles.video}>
			<video src={video} ref={videoRef} type="video/mp4" loop muted />
			<div className={`${styles.video__overlay} flex__center`}>
				<div
					role="button"
					tabIndex={0}
					className={`${styles.video__overlay_circle} flex__center`}
					onClick={handleVideo}
					onKeyPress={handleVideoKeyPress}
				>
					{toggleVideo ? (
						<BsPauseFill color="#fff" fontSize={30} />
					) : (
						<BsFillPlayFill color="#fff" fontSize={30} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Intro;
