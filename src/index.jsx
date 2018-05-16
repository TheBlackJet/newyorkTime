import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  createStore
} from 'redux';
import App from './app/app';
import rootReducer from './reducers';


//import { APP_TITLE } from "./app-configs";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
      <App title="cool" />
    </Provider>,
  document.getElementById('app')
);
