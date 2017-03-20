import React, { Component } from 'react';

import './App.css';
import Form from './Form';
import DevTools from './DevTools';

class App extends Component {

  render() {
    return (
      <div className="App">
        <DevTools />
        <Form />
      </div>
    );
  }
}

export default App;
