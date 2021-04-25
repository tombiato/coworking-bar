import Bars from '../components/Bars';
import Restaurants from '../components/Restaurants';

const Home = () => {
	return (
		<>
			<div className='flex flex-col h-80 justify-center items-center'>
				<h2 className='text-4xl'>Welcome to Coworker Bar</h2>
				<p className='text-sm'>Probably your best office !</p>
			</div>
			<Bars />
			<Restaurants />
		</>
	);
};

export default Home;
