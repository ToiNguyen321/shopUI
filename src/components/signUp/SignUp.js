import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import FormSignUp from './FormSignUp';
import styleText from '../../styles/StylesText';
const { width, height } = Dimensions.get('window');

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.fill}>
        <View style={[{ ...StyleSheet.absoluteFill }, styles.fill ]}>
            <Image 
            style={[ styles.imageBg ]}
            source={require('../../assets/images/bgLogin.png')} />
        </View>
        <View
         style={[ styles.container ]}
        >
           <Text style={[styles.textTitle, styleText.fonts]}>Enter Premium Sound</Text>
           <View style={[styles.viewLogin, styleText.fonts]}>
               <FormSignUp navigation={this.props.navigation} />
           </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   fill: {
      flex: 1,
      justifyContent: 'flex-end'
   },
   imageBg: {
      flex: 1,
      width: null,
      height: null,
   },
   container: {
      width,
      height: height/5 * 4,
      backgroundColor: 'rgba(255,255,255,0)',
      justifyContent: 'flex-start'
   },
   textTitle:{
      flex: 1,
      textAlign: 'center',
      textTransform: 'uppercase',
      color: 'white',
      fontSize: 26,
      fontWeight: '900'
   },
   viewLogin:{
      flex: 4
   }
})
