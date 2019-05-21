//Display should count the balls and strikes at bat
//Should update activity inside the dashboard

import React from 'react';
import './Display.css';

class Display extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return(
      <div className="dashboard">
        <h2> dashboard </h2>
        <p>Ball: </p>
        <p>Strike: </p>
        <p>Out: </p> 
      </div>
    )
  }
}

export default Display;
