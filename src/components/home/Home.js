import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
         <Header title={'Welcome'}/>
        <Text> Home </Text>
      </View>
    );
  }
}
