import React, { Component } from 'react';
import Routes from './Routes'
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
