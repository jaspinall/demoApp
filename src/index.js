import React from 'react';
import ReactDOM from 'react-dom';
import { compose, createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import thunk from 'redux-thunk';

import './index.css';
import rootReducer from './reducers/reducers';
import Form from './Form';
import ResultsTable from './ResultsTable';
import DevTools from './DevTools';
import App from './App';

const enhancer = compose(
  applyMiddleware(thunk),
  DevTools.instrument()
)

const store = createStore(rootReducer, {}, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Form}/>
        <Route path='/results' component={ResultsTable}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
