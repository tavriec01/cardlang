import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";
import Cards from './cardlang/Cards.js';

function App() {
  return (
    <Router>
      <div>
        <nav className='header'>
          <ul className='navbar'>
            <li className='nav-item nav-item-center'>
              <h1 className="logo">cardlang</h1>
            </li>
            <li className='nav-item'>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>          
          <Route path="/cards">
            <Cards />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
      <div className="flag-chose">
        <NavLink to="/cards">
          <div className='flag-chose-item white-block'>
            <img 
              className='small-img' 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/33px-Flag_of_the_United_Kingdom.svg.png" 
              alt="" /> English
          </div>
        </NavLink>
        <NavLink to="/cards">
          <div className='flag-chose-item white-block'>
            <img 
              className='small-img' 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Poland_%281928–1980%29.svg/33px-Flag_of_Poland_%281928–1980%29.svg.png" 
              alt="" /> Polski
          </div>
        </NavLink>
        <NavLink to="/cards"> 
          <div className='flag-chose-item white-block'>
            <img 
              className='small-img' 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/33px-Flag_of_Finland.svg.png" 
              alt="" /> Suomi
          </div>
        </NavLink>
      </div>

    
  );
}

function About() {
  return (
    <div className="about white-block">
      <h2>About</h2>
      <div className="about-text">This project is based on the method of learning foreign languages by the pictures. The association occurs directly with the object on the picture and not with the word of the native language. Thus, the study of vocabulary is much faster and easier.</div>
      <div className="about-text">v0.1</div>
    </div>
  );
}




export default App;
