import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    completedStyles = {
        fontStyle:"italic",
        color:"#cdcdcd",
        textDecoration:"line-through"
    }
    
    render(){
        return(
            <div class="todoitem">
                    <input 
                    type="checkbox" 
                    checked = {this.props.Titem.completed} 
                    onChange={(event) => this.props.handleChange(this.props.Titem.id)}/>
                    <p style={this.props.Titem.completed ? this.completedStyles : null}>{this.props.Titem.text}</p>
            </div>     
        )
    }
}
export default TodoItem;