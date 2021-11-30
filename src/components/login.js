import React,{Component} from 'react'

class Login extends Component{
    constructor(){
        super();
    }

    render(){

        let buttonText = this.props.signedin?"logged in":"logged out"
        return(
        <div className="titlebar">  
            <h1>Swetha</h1>
            <h3>You are {buttonText} &nbsp;&nbsp;
            <button className="loginbtn" onClick={this.props.action}>{this.props.signedin?"logout":"login"}</button></h3>
        </div>
        
        )
    }
}
export default Login