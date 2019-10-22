import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window')
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
            source={{uri: this.props.image}} />
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
        width,
        height: 200,
        // resizeMode: 'stretch'
    }
})
