import React from "react"

function FormComponent(props){
    return(
        <div className="form">
            <form>
                    <input 
                        type="text" 
                        placeholder = "First Name" 
                        name="firstName" 
                        value={props.data.firstName} 
                        onChange = {props.inputhandleChange}/>
                    <input 
                        type="text" 
                        placeholder = "Last Name" 
                        name="lastName" 
                        value={props.data.lastName} 
                        onChange = {props.inputhandleChange}/>
                    <h1>{props.data.firstName}  {props.data.lastName}</h1>
                    <br/>

                    <textarea value={"some default value here"} onChange = {props.inputhandleChange}/>
                    <br/>

                    <label>isFriendly : 
                    <input 
                        type="checkbox" 
                        name="isFriendly" 
                        checked={props.data.isFriendly} 
                        onChange={props.inputhandleChange}/>
                    </label>
                    <br/>

                    <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="male" 
                        checked={props.data.gender==="male"} 
                        onChange={props.inputhandleChange}/>
                        Male
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        name="gender" 
                        value="female" 
                        checked={props.data.gender==="female"} 
                        onChange={props.inputhandleChange}/>
                        Female
                    </label>
                    <br/>
                    
                    <label>Favorite Color : 
                    <select name="favColor" value={props.data.favColor} onChange={props.inputhandleChange}>
                    <option value="blue">Blue</option>
                    <option value="red">Red</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    </select>
                    </label>
                    <br/>
                    <button>Submit</button>
            </form>
        </div>
    )
}
export default FormComponent