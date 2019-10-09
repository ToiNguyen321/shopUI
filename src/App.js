import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Provider} from 'react-redux';

import Navigator from './navigators/Navigator'
import store from './redux/Store';
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}
