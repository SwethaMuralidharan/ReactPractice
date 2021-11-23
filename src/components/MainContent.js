import React from 'react';
import ReactDOM from 'react-dom';

class MainContent extends React.Component{
  constructor(){
    super();

  }
  render(){
    return(
      <div className="main">
         <p>I'm {this.props.name} {this.props.age} years old . I'm a Software Engineer and loves to go on vacation in North America. These are my most favorite ones so far.</p>
          <ul>
            <li>Hawaii in 2019</li>
            <li>Bali in 2018</li>
            <li>Niagara in 2018</li>
          </ul>
      </div>
    )
  }
}

export default MainContent;
