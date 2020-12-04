import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from "react-redux";
import todoApp from "./redux/reducer/index";
import { composeWithDevTools } from 'redux-devtools-extension';
let store = createStore(todoApp,composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
