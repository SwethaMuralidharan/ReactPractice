import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom';

class TodoItem extends React.Component{
    render(){
        return(
            <div class="todoitem">
                <input type="checkbox" checked = {this.props.Titem.completed}/>
                <p>{this.props.Titem.text}</p>
            </div>
        )
    }
}
export default TodoItem;