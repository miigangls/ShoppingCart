import React from 'react';
import {Text} from 'react-native';

import { Container, Content } from 'native-base';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


import rootReducer from '../reducers'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container>
          <Content>
            <Text>Hola mundo</Text>
          </Content>
        </Container>
      </Provider>
    )
  }
}


export default App;
