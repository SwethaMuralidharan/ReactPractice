import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import Greeting from './components/greeting.js';
import TodoItem from './components/TodoItem.js';
import ContactCard from './components/contactcard.js';
import "./App.css";


function App(){
  return(
    <div>
      <NavBar/>
      <div className = "todolist">
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </div> 
      <MainContent/>
      <Greeting/>
      <div id="contacts" className="contacts">
        <ContactCard contact = {{name : "Mr.Whiskerston", imgUrl:"http://placekitten.com/300/200", phone:"213-3123-321" ,email:"mr.whiskerston.meow"}}/>
        <ContactCard contact = {{name : "Mr.Meowmaster", imgUrl:"http://placekitten.com/300/300", phone:"213-3123-321", email:"mr.whiskerston.meow"}}/>
        <ContactCard contact={{ name : "Mr.GrumpyCute" ,imgUrl:"http://placekitten.com/300/400", phone:"213-3123-321", email:"mr.whiskerston.meow"}}/> 
      </div>
      <Footer/>
      
     
    </div>

  )
}
export default App;
