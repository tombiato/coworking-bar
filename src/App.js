import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// State
import BarsState from './context/bars/BarsState';

// Components
import Header from './layout/Header';
import Home from './pages/Home';

const App = () => {
	return (
		<BarsState>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/' component={Home} />
				</Switch>
			</Router>
		</BarsState>
	);
};

export default App;
