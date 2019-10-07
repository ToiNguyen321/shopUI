import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Header from '../Header';
import { TextInput } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Header title={'Search'} back={false} navigation={this.props.navigation} />
        <TextInput
          placeholder="Search Something"
          placeholderTextColor="#515C6F"
          style={styles.textInput}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    marginTop: 20,
    marginHorizontal: 20, 
    backgroundColor: 'rgba(114,124,142,0.1)',
    borderRadius: 40,
    height: 40,
    textAlign: 'center'
  }
})