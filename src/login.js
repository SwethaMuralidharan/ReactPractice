import React,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
    }

    render(){
        let buttonText = this.props.signedin?"logged in":"logged out"
        return(
        <div>  
            <h3>You are {buttonText}</h3>
            <button onClick={this.props.action}>{this.props.signedin?"logout":"login"}</button>
        </div>
        
        )
    }
}
export default Login