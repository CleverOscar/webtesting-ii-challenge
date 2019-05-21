import React from 'react';
import './App.css';
import Display from './components/Display/Display';

//Count Rules
// balls and strikes reset to 0 when reached 3 strikes or 4 balls
// balls and strikes reset to 0 when a "hit" is recorded
// foul increases strikes up to 2, fould has no affect if there is two stirkes


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      strikes: 0,
      balls: 0,
      out: 0,
    }
  }


  render(){
  return (
    <div className="App">
      <header className="header"> Baseball Stadium Peronnel</header>
        <Display />
      </div>
    );
  }
}

export default App;
