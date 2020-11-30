import React, {Component} from 'react'
import './App.css';
import UserInput from "./UserInput/UserInput.js";
import UserOutput from "./UserOutput/UserOutput.js";


class App extends Component {
state = {
  username: "Simon's feet"
}

inputChangeHandler = (event) => {
  this.setState({username: event.target.value})
}


  render(){
    return (
      <div className="App">
      <p className="App">Udemy React Assignment One</p>
      <UserInput
      currentName={this.state.username}
      inputChange={this.inputChangeHandler.bind(this)}
      />
      <UserOutput
      currentName={this.state.username}
      />
      </div>
    );
  }
}
export default App;
