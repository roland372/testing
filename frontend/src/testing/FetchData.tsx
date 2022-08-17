import { useState, useEffect } from 'react';
import axios from 'axios';

const FetchData = () => {
	//* Fetch cat facts
	const [catFact, setCatFact] = useState('');

	//* fetch data with built in fetch function
	// fetch('https://catfact.ninja/fact')
	// 	.then(res => res.json())
	// 	.then(data => console.log(data));

	//* fetch data with axios
	const fetchCatFact = () => {
		axios.get('https://catfact.ninja/fact').then(res => {
			// console.log(res.data.fact);
			setCatFact(res.data.fact);
		});
	};

	useEffect(() => {
		fetchCatFact();
	}, []);

	//* Fetch age
	const [name, setName] = useState<string>('');
	const [predictedAge, setPredictedAge] = useState<any>(null);

	const fetchPredictAge = () => {
		axios.get(`https://api.agify.io/?name=${name}`).then(res => {
			// console.log(res.data);
			setPredictedAge(res.data);
		});
	};

	//* Fetch excuse
	const [fetchedExcuse, setFetchedExcuse] = useState('');

	const fetchExcuse = (excuse: string) => {
		axios.get(`https://excuser.herokuapp.com/v1/excuse/${excuse}`).then(res => {
			setFetchedExcuse(res.data[0].excuse);
			// console.log(res.data[0].excuse);
		});
	};

	return (
		<>
			<h1>Cat Facts</h1>
			<button onClick={() => fetchCatFact()}>get cat fact</button>
			<p>{catFact}</p>

			<h1>Predict Age</h1>
			<input
				type='text'
				placeholder='Roland'
				onChange={e => {
					setName(e.target.value);
				}}
			/>
			<button onClick={() => fetchPredictAge()}>Predict age</button>
			<p>Name: {predictedAge?.name}</p>
			<p>Age: {predictedAge?.age}</p>
			<p>Count: {predictedAge?.count}</p>

			<h1>Generate Excuse</h1>
			<button onClick={() => fetchExcuse('party')}>Party</button>
			<button onClick={() => fetchExcuse('family')}>Family</button>
			<button onClick={() => fetchExcuse('office')}>Office</button>
			<p>{fetchedExcuse}</p>
		</>
	);
};

export default FetchData;
