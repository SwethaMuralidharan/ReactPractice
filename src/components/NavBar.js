import React from 'react';
import ReactDOM from 'react-dom';

class NavBar extends React.Component{
  render(){
    return(
      <div className="navbar">
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#contacts">Contact</a></li>
            </ul>
      </div>
    )
  }
}

export default NavBar;
