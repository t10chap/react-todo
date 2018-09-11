import React, { Component } from 'react';
import MyRoutes from './config/routes.js';
import Header from './components/Header.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        { MyRoutes }
      </div>
    );
  }
}

export default App;
