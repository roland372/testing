import { useState } from 'react';
import { motion } from 'framer-motion';

import './FramerMotion.css';

const FramerMotion = () => {
	const [rotate, setRotate] = useState(false);
	const [move, setMove] = useState(false);

	return (
		<div className='container'>
			<motion.div
				// animate={{ y: -100, scale: 1 }}
				animate={{ rotate: rotate ? 360 : 0, x: move ? 200 : -200 }}
				transition={{ delay: 0.1, type: 'spring', bounce: 0.5 }}
				onClick={() => {
					setRotate(!rotate);
					setMove(!move);
				}}
				whileHover={{ scale: 1.1 }}
				whileDrag={{ scale: 1.2 }}
				drag='x'
				dragConstraints={{ left: 50, right: 50 }}
			></motion.div>
		</div>
	);
};

export default FramerMotion;
