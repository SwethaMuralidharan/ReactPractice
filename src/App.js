import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import "./App.css";


function App(){
  return(
    <div>
      {/* <input type="checkbox"/>
      <p>Placeholder text here !</p>

      <input type="checkbox"/>
      <p>Placeholder text here !</p>

      <input type="checkbox"/>
      <p>Placeholder text here !</p>

      <input type="checkbox"/>
      <p>Placeholder text here !</p> */}
      <NavBar/>
      <MainContent/>
      <Footer/>
    </div>

  )
}
export default App;
