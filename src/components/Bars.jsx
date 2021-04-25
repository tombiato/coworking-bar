import { useContext, useEffect } from 'react';

// Context
import BarsContext from '../context/bars/barsContext';

// Components
import BarItem from '../components/BarItem';

const Bars = () => {
	const barsContext = useContext(BarsContext);

	const { bars, getBars } = barsContext;

	useEffect(() => {
		getBars();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className='grid grid-cols-3'>
			{bars.map(bar => (
				<BarItem key={bar._id} bar={bar} />
			))}
		</div>
	);
};

export default Bars;
