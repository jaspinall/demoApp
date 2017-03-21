import React, { Component } from 'react';
import DevTools from './DevTools';

const App = ( props ) => {
  return(
    <div>
      <DevTools />
      {props.children}
    </div>
  )
}

export default App;
