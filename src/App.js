import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, NavLink } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <nav className='header'>
          <div className="nav_item"></div>
          <ul className='navbar'>
            <li className='nav_item'>
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
    <ul className="flag_chose">
      <li className='flag_chose_item'><a href=""><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/33px-Flag_of_the_United_Kingdom.svg.png" alt="" /> English</a></li>
      <li className='flag_chose_item'><a href=""><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_Poland_%281928–1980%29.svg/33px-Flag_of_Poland_%281928–1980%29.svg.png" alt="" /> Polski</a> </li>
      <li className='flag_chose_item'><a href=""><img className='small_img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/33px-Flag_of_Finland.svg.png" alt="" /> Suomi</a></li>
    </ul>

    
  );
}

function About() {
  return <h2>About</h2>;
}


export default App;
