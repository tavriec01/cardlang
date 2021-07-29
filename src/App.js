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
            <li className='nav_item nav_item_center'>
              <h1 className="logo">cardlang</h1>
            </li>
            <li className='nav_item'>
              <NavLink to="/" exact>Home</NavLink>
            </li>
            <li className='nav_item'>
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
      <div className="flag_chose">
        <div className='flag_chose_item white_block'><NavLink to="/cards"><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/33px-Flag_of_the_United_Kingdom.svg.png" alt="" /> English</NavLink></div>
        <div className='flag_chose_item white_block'><NavLink to="/cards"><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Poland_%281928–1980%29.svg/33px-Flag_of_Poland_%281928–1980%29.svg.png" alt="" /> Polski</NavLink> </div>
        <div className='flag_chose_item white_block'><NavLink to="/cards"><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/33px-Flag_of_Finland.svg.png" alt="" /> Suomi</NavLink></div>
      </div>

    
  );
}

function About() {
  return (
    <div className="about white_block">
      <h2>About</h2>
      <div className="about_text">This project is based on the method of learning foreign languages by the pictures. The association occurs directly with the object on the picture and not with the word of the native language. Thus, the study of vocabulary is much faster and easier.</div>
      <div className="about_text">v0.1</div>
    </div>
  );
}



export default App;
