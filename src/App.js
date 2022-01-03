import './reset.css'
import './App.css';
import './navfooter.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Nav from './Components/Nav/Nav';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <div className='content-wrap'>
          <Switch>
            <Route exact path='/themellowmartian'>
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
