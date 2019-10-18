import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import styleText from '../../styles/StylesText';
const { width, height } = Dimensions.get('window');
export default class OpenApp extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <View style={styles.fill}>
            <View style={{ ...StyleSheet.absoluteFill }}>
               <Image
                  source={require('../../assets/images/bgLoad.png')}
                  style={styles.imageBg}
               />
            </View>
            <View style={[styles.container]}>
               <Text style={[styles.textTop, styleText.fonts]}>Listen all day</Text>
               <Text
                  style={[styles.textContent, styleText.fonts]}
               >
                  Enjoy your playlist without interruption, because a full charge lasts up to 22 hours - or up to 40 hours with Pure ANC off.</Text>
               <View
                  style={[styles.viewButton]}
               >
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('Login')}
                     style={[ styles.layoutButton, styles.buttonLogin ]}
                  >
                     <Text style={[styleText.fonts, styles.textButton ]}>Đăng nhập</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     onPress={() => this.props.navigation.navigate('SignUp')}
                     style={[ styles.layoutButton, styles.buttonSignUp ]}
                  >
                     <Text style={[styleText.fonts, styles.textButton ]}>Đăng ký</Text>
                  </TouchableOpacity>
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
      width: null,
      height: null,
      flex: 1
   },
   container: {
      width,
      height: height / 11 * 4,
      justifyContent: 'flex-start',
      paddingHorizontal: 20,
   },
   textTop: {
      color: '#FFF',
      fontSize: 25,
      fontWeight: '900',
      textTransform: 'uppercase',
   },
   textContent: {
      marginTop: 15,
      fontSize: 14,
      color: 'rgba(255,255,255,0.49)',
      lineHeight: 22,
   },
   viewButton: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
   },
   layoutButton: {
      flex: 1,
      borderRadius: 2,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center'
   },
   buttonLogin: {
      marginRight: 5,
      backgroundColor: '#7C6BD7',
   },
   buttonSignUp: {
      marginLeft: 5,
      borderWidth: 1,
      borderColor: '#7C6BD7'
   },
   textButton: {
      fontSize: 14,
      color: '#FFF',
      fontWeight: '900',
   }
})

