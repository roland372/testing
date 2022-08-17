import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const ReactRouter = () => {
	return (
		<>
			<Router>
				<div>
					<Link to='/'>Home</Link>
					<Link to='/menu'>Menu</Link>
					<Link to='/about'>About</Link>
				</div>
				<Routes>
					<Route path='/' element={<Homepage />} />
					<Route path='/menu' element={<Menu />} />
					<Route path='/about' element={<About />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Router>
		</>
	);
};

export default ReactRouter;

const Homepage = () => {
	return <h1>Homepage</h1>;
};
const Menu = () => {
	return <h1>Menu</h1>;
};
const About = () => {
	return <h1>About</h1>;
};
const NotFound = () => {
	return <h1>404 Not Found</h1>;
};
