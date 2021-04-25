import { useReducer } from 'react';
import axios from 'axios';

// Context
import BarsContext from './barsContext';
import barsReducer from './barsReducer';

const BarsState = props => {
	const initialState = {
		bars: [],
	};

	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(barsReducer, initialState);

	const getBars = async () => {
		try {
			const res = await axios.get('http://localhost:5000/api/bars');

			dispatch({ type: 'GET_BARS', payload: res.data.bars });
		} catch (err) {
			console.error(err.message);
		}
	};

	return (
		<BarsContext.Provider
			value={{
				bars: state.bars,
				getBars,
			}}>
			{props.children}
		</BarsContext.Provider>
	);
};

export default BarsState;
