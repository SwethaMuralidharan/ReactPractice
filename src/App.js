import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/NavBar.js';
import MainContent from './components/MainContent.js';
import Footer from './components/Footer.js';
import Greeting from './components/greeting.js';
import TodoItem from './components/TodoItem.js';
import ContactCard from './components/contactcard.js';
import "./App.css";
import todosData from "./components/TodosData.js"


class App extends React.Component{
  constructor(){
    super();
    this.state={
      name:"Swetha",
      age:30,
      todos:todosData,
      isLoading:true
    }
    this.handleChange=this.handleChange.bind(this);
  }
  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading:false
      })
    },2000)
  }
  handleChange(id){
    this.setState((prevState)=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id===id){
            todo.completed = !todo.completed
        }
        return todo;
      })
      return {
        todos:updatedTodos
      }
    })
  }
  render(){
    
    const todosItems = this.state.todos.map(item => 
       <TodoItem key={item.id} 
              Titem={item}
              handleChange={this.handleChange} 
              />)
    return(
      <div>
        <NavBar/>
        <MainContent name = {this.state.name} age ={this.state.age} />
        <div className = "todolist">
          <h1> Todo List </h1>
         {this.state.isLoading ? "Loading": todosItems}
        </div> 
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
}
export default App;
