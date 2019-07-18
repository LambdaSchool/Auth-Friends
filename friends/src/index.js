import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import friendsReducer from './reducers';

import App from './App';
import './index.css';

const logger = store => next => action => {
  console.log('Prev State', store.getState());
  console.log('Action', action);

  next(action);

  console.log('New State', store.getState());
};

const store = createStore(
  friendsReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : f => f
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
