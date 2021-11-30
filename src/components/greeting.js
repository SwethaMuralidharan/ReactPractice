import React from 'react';
import react from 'react';
import ReactDOM from 'react-dom';

class Greeting extends React.Component{
  render(){
    const date = new Date();
    const hours = date.getHours();
    let timeOfDay;
    const styles = {
        backgroundColor:"aquamarine",
        fontSize:100,
        textAlign:"center"
    }
    if(hours<12){
      timeOfDay = "morning";
      styles.color= "#047565"
    }else if(hours>=12 && hours<17){
      timeOfDay ="afternoon";
      styles.color= "#077535";
    }
    else{
      timeOfDay = "night";
      styles.color= "#037765";
    }
  
    return(
        <h1 style={styles}> Good {timeOfDay} </h1>
    )
  }
}
export default Greeting;
