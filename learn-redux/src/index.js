import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {applyMiddleware, createStore} from 'redux';
import rootReducer, {rootSaga} from "./modules";
import {logger} from "redux-logger";
import ReduxThunk from 'redux-thunk';
import {Provider} from "react-redux";
import {BrowserRouter} from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, (applyMiddleware(ReduxThunk, sagaMiddleware, logger)));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
   <BrowserRouter>
      <Provider store={store}>
         <App/>
      </Provider>
   </BrowserRouter>
   , document.getElementById('root'));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
