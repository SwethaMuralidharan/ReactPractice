import React from 'react';
import ReactDOM from 'react-dom';

function NavBar(){
  return(
    <div className="navbar">
          <h1>Swetha</h1>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
    </div>
  )
}
export default NavBar;
