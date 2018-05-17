import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

import App from './app/App';
import rootReducer from './reducers';


//import { APP_TITLE } from "./app-configs";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
    <Provider store={store}>
      <App header="New York Times" />
    </Provider>,
  document.getElementById('app')
);
