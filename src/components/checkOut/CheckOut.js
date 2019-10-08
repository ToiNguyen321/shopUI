import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../Header';

export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header title={'Checkout'} close={true} navigation={this.props.navigation} />
      </View>
    );
  }
}
