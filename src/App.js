import React from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Home from './Home';
import About from './About';
import Us from './Us'
import Contact from './Contact';
import Portofolio from './Portofolio';
import Service from './Service'
// import '/App.css';


const App = () => {
  return (
    <Router>
          <div className="App">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    <Link to="/service">Contact</Link>
    <Link to="/us">Us</Link>
    <Link to="/Portofolio">Portofolio</Link>
    
    </div>

    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/us" component={Us} />
    <Route exact path="/service" component={Service} />
    <Route exact path="/portofolio" component={Portofolio} />
    </Router>
  );
}

export default App;
