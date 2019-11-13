import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import Routes from './src/utility/Routes';
import Reducer from './src/utility/Reducer';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(Reducer)}>
        <Routes />
      </Provider>
    );
  }
}
