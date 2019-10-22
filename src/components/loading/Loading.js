import React, { Component } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
         <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}
const { width,  height } =Dimensions.get('window')
const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})