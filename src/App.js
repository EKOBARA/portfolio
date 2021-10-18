import About from './components/About';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/contact';
import { Link, Route } from 'react-router-dom' 
import './App.css';

function App() {
  return (
		<div className='App'>
			<Link to='/about'>
				<img src='./images/code.png' alt='code_kobara' />
			</Link>
			<Route exact path='/' component={Home} />
			<Route exact path='/about' component={About} />
			<Route exact path='/projects' component={Projects} />
			<Route exact path='/contact' component={Contact} />
		</div>
	);
}

export default App;
