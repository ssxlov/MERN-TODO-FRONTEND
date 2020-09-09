import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from "react-router-dom";
import {createBrowserHistory} from 'history'
import thunk from "redux-thunk";
import rootReducer from './app/Containers/TodoList/reducers'


const store = createStore(rootReducer, applyMiddleware(thunk));
const history = createBrowserHistory()

//todo setup Provider here for use store from the './app/store'
ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
            <Router history={history}>
                <App/>
            </Router>
        </Provider>
      </React.StrictMode>,

  document.getElementById('root')
);
serviceWorker.unregister();
