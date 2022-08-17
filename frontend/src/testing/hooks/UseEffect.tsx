import { useState, useEffect } from 'react';

const UseEffect = () => {
	//* Conditional rendering
	const [showText, setShowText] = useState<boolean>(false);

	useEffect(() => {
		console.log('component mounted');

		return () => {
			console.log('component unmounted');
		};
	}, [showText]);

	return (
		<>
			<h1>Conditional rendering</h1>
			<button
				onClick={() => {
					setShowText(!showText);
				}}
			>
				{showText ? 'Hide' : 'Show'}
			</button>
			{showText && <p>Text</p>}
		</>
	);
};

export default UseEffect;
