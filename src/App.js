import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import MainBody from './components/MainBody'
import About from './components/About'
import Experts from './components/Experts'
import Contact from './components/Contact'

const App = () => {	
	return (
	    <Router>
	    	<div>
		      	<Header />
      			<Route path='/' exact component={MainBody} />
		      	<Route path='/about' component={About} />
		      	<Route path='/experts' component={Experts} />
		      	<Route path='/contact' component={Contact} />
		      	<Footer />
		    </div>
	    </Router>
  	)	
}

export default App