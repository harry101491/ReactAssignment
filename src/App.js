import React, { Component } from 'react';
import './App.css';

import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "harshit"
  };
  
  inputChangeHandler = (event) => {
    console.log("Inside the input handler");

    this.setState({
      username: event.target.value
    });
  }

  render() {
    const UserOutputStyle = { 
      color: "blue",
      backgroundColor: "red",
      padding: "10px"
    };

    return (
      <div className="App">
        <UserInput 
          change={ this.inputChangeHandler.bind(this) }
          defaultName={ this.state.username }
        />
        <UserOutput 
          username={ this.state.username }
          style={ UserOutputStyle } 
        />
        <UserOutput 
          style={ UserOutputStyle }
          username={ this.state.username } 
        />
      </div>
    );
  }
}

export default App;
