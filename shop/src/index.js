import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import './index.css'
import App from './containers/App'
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
  store.subscribe(() => {
    console.log(store.getState().sent);
  });
  
render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'))

