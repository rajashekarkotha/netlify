import logo from './logo.svg';
import './App.css';
// import BlogHome from './BlogHome';
import Application from './Application';
import UseEff from './EffectUse';
import { BrowserRouter as Router, Switch,Route , Link, IndexRoute} from 'react-router-dom';

import Home from './RouteComponents/Home';
import About from './RouteComponents/About';
import Contact from './RouteComponents/Contact';
import Effect from './RouteComponents/Effect';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <h1>My Blog</h1>
        {/* <div>
          {this.props.children}
        </div> */}
        <Application/>
        <UseEff/>
        <Effect/>
      </div>
      <Router>
         <nav>
           <ul>
           <Link to={'/'} className="nav-link">Home</Link>
          <Link to={'/about'} className="nav-link">About</Link>
          <Link to={'/contact'} className="nav-link">Contact</Link>
           </ul>
         </nav>
       <br/>
       <Switch>
         <Route exact path='/' component={Home}/>
         <Route exact path='/about' component={About}/>
         <Route exact path='/contact' component={Contact}/>
       </Switch>
      </Router>
    </div>
  );
}

export default App;
