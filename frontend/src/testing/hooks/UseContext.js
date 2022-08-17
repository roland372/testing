import { useState, createContext, useContext } from 'react';

export const UseContextContext = createContext({});

const UseContext = () => {
	const [state, setState] = useState('hello');

	return (
		<UseContextContext.Provider value={{ state, setState }}>
			<TopComponent />
		</UseContextContext.Provider>
	);
};

export default UseContext;

const TopComponent = () => {
	return <MiddleComponent />;
};

const MiddleComponent = () => {
	return <BottomComponent />;
};

const BottomComponent = () => {
	const { state, setState } = useContext(UseContextContext);

	return (
		<div>
			<input type='text' onChange={e => setState(e.target.value)} />
			<div>state from Top Component: "{state}"</div>
		</div>
	);
};

//
//* Prop drilling - with useState
// const UseContext = () => {
// 	const [state, setSate] = useState('hello');

// 	return <TopComponent state={state} />;
// };

// export default UseContext;

// const TopComponent = (props: any) => {
// 	return <MiddleComponent state={props.state} />;
// };

// const MiddleComponent = (props: any) => {
// 	return <BottomComponent state={props.state} />;
// };

// const BottomComponent = (props: any) => {
// 	return <div>state from Top Component: {props.state}</div>;
// };
