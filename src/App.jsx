import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DefaultLayout from './layouts/DefaultLayout';
import Home from './pages/Home';
import About from './pages/About';
import ProfessionalHistory from './pages/ProfessionalHistory';

function App() {
	return (
		<Router>
			<Switch>
				<DefaultLayout>
					<Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/professional-history' component={ProfessionalHistory} />
				</DefaultLayout>
			</Switch>
		</Router>
	);
}

export default App;
