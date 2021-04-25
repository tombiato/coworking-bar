import { useReducer } from 'react';

// Context
import BarsContext from './barsContext';
import barsReducer from './barsReducer';

const BarsState = props => {
	const initialState = {
		bars: [],
	};

	// eslint-disable-next-line no-unused-vars
	const [state, dispatch] = useReducer(barsReducer, initialState);

	return (
		<BarsContext.Provider
			value={{
				bars: state.bars,
			}}>
			{props.children}
		</BarsContext.Provider>
	);
};

export default BarsState;
