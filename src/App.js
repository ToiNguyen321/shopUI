import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { View, Dimensions } from 'react-native';
import Navigator from './navigators/Navigator'
import store from './redux/Store';
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
          <Navigator />
          {/* <Popup /> */}
      </Provider>
    );
  }
}
