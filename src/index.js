import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose  } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer.js'
import App from './app.js';

let store = createStore(
    rootReducer, 
    {},
    compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)