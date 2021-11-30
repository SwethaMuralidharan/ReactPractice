import React,{Component} from 'react'
import FormComponent from "./FormComponent.js"
class Form extends Component{
    constructor(){
      super();
      this.state={
        firstName:"",
        lastName:"",
        isFriendly:true,
        gender:"",
        favColor:"blue"
      }
      this.inputhandleChange=this.inputhandleChange.bind(this);
    }
    inputhandleChange(event){
      const {name,value,type,checked }=event.target
      type==="checkbox"? this.setState({[name]:checked}) :this.setState({[name]:value})
    }
    render(){
      return(
        <FormComponent inputhandleChange={this.inputhandleChange} data={this.state}/>
      )
      
    }

}
export default Form