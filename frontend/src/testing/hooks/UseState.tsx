import { useState, ChangeEvent } from 'react';

const UseState = () => {
	//* Counter
	const [counter, setCounter] = useState<number>(0);

	const handleSetCounter = (counter: number): void => {
		setCounter(counter);
	};

	//* Input
	const [inputValue, setInputValue] = useState<string>('');

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setInputValue(e.target.value);
	};

	//* Conditional rendering
	const [showText, setShowText] = useState<boolean>(true);

	return (
		<>
			<h1>Counter</h1>
			{counter}
			<button onClick={() => handleSetCounter(counter + 1)}>+</button>
			<button onClick={() => handleSetCounter(counter - 1)}>-</button>
			<button onClick={() => handleSetCounter(0)}>reset</button>

			<h1>Input</h1>
			<input type='text' onChange={handleInputChange} />
			<p>{inputValue}</p>

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

export default UseState;
