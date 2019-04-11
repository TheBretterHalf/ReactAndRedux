import React, { Component } from 'react';
import Ninjas from './Ninjas';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>My first React App</h1>
        <p>Welcome</p>
        <Ninjas name="Ryu" age="25" belt="Black"/>
        <Ninjas name="Brett" age="40" belt="Yellow"/>
      </div>
    );
  }
}

export default App;
