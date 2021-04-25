import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<div className='bg-blue-400 py-4'>
			<div className='text-2xl container flex justify-between mx-auto'>
				<h1>Coworking Bar</h1>
				<nav>
					<Link to='/'>Home</Link>
				</nav>
			</div>
		</div>
	);
};

export default Header;
