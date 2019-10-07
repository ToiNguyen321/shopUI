import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

export default class ProductSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Image 
            style={[styles.imageProduct]}
            source={require('../../assets/images/products/Image3.png')} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        height: 200,
        paddingTop: 15,
        paddingBottom: 10,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageProduct: {
        maxWidth: 200,
        maxHeight: 180,
    }
})
