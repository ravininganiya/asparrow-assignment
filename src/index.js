import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App'
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers'
import { loadState, saveState } from "./localStorage";
import throttle from "lodash/throttle";
import { devToolsEnhancer } from 'redux-devtools-extension';

const persistedState = loadState();
const store = createStore(rootReducer, devToolsEnhancer(persistedState));
store.subscribe(
  throttle(() => {
    saveState({
      student: store.getState().student
    });
  }, 1000)
);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    ,document.getElementById('root')
)
