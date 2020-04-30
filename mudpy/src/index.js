import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import {createStore, applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk"
import { BrowserRouter as Router} from 'react-router-dom'
import logger from 'redux-logger'
import onboardingReducer from "./reducers/onboardingReducer"
import gameReducer from "./reducers/gameReducer"


const rootReducer = combineReducers({
 onboardingReducer,
 gameReducer
})

const store = createStore((rootReducer), applyMiddleware(thunk,logger))





ReactDOM.render(
  <Provider store={store}> 
    <Router> 
    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
