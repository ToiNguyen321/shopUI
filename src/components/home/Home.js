import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../Header';
import BestSale from './BestSale';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header title={'Welcome'} back={true} navigation={this.props.navigation} />
        <View style={styles.container}>
          <BestSale />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20
    }
})