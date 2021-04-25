const BarItem = ({ bar }) => {
	return (
		<div className='flex flex-col items-center'>
			<img src={`/images/${bar.image}`} alt='Profil pic' />
			<p>{bar.name}</p>
		</div>
	);
};

export default BarItem;
