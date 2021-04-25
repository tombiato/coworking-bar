// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
	switch (action.type) {
		case 'GET_BARS':
			return {
				...state,
				bars: action.payload,
			};
		default:
			return 'Error...';
	}
};
