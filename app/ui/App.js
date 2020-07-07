import React from 'react';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import Main from './containers/main'


import rootReducer from '../reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <Main />
      </Provider>
    )
  }
}


export default App;
