import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import thunk from 'redux-thunk';

import './index.css';
import rootReducer from './reducers/reducers';
import App from './App';
import DevTools from './DevTools';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <div>
        <Route path='/' component={App}/>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);
