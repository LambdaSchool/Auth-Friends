//here the react stuff
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//the redux stuff
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import friends from './reducers/Reducers';
import logger from 'redux-thunk';
import thunk from 'redux-logger';
//styles goes here
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';

const store = createStore(friends, applyMiddleware(thunk, logger));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
