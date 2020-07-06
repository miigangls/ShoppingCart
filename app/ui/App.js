import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
} from 'react-native';


import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers'


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentInsetAdjustmentBehavior="automatic" >
          <Provider store={store}>
            <Text>Hola Mundd</Text>
          </Provider>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};


export default App;
