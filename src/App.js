import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Header from './layout/Header';

const App = () => {
	return (
		<Router>
			<Header />
		</Router>
	);
};

export default App;
