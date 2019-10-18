import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity } from 'react-native';
import StylesText from '../../styles/StylesText';
const { width, height } = Dimensions.get('window');
export default class FormSignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: "",
       pass: "",
       pass2: ""
    };
  }
  _name = (name) => {
     this.setState({
        name
     })
  }
  _pass = (pass) => {
      this.setState({
         pass
      })
   }
   _pass2 = (pass2) => {
       this.setState({
           pass2
       })
   }
  render() {
    return (
      <View style={styles.fill}>
         <TextInput 
            placeholder="Tên đăng nhập"
            onChangeText={(val) => this._name}
            style={[styles.textInput, styles.layout]}
          />
         <TextInput 
            placeholder="Mật khẩu"
            onChangeText={(val) => this._pass} 
            style={[styles.textInput, styles.layout]}
         />
         <TextInput 
            placeholder="Nhập lại mật khẩu"
            onChangeText={(val) => this._pass2} 
            style={[styles.textInput, styles.layout]}
         />
         <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            activeOpacity={0.6}
            style={[styles.layout, styles.buttonLogin]}
         >
            <Text style={styles.textButtonLogin}>Đăng ký</Text>
         </TouchableOpacity>
         <TouchableOpacity
            onPress={()=>this.props.navigation.navigate('Login')}
            activeOpacity={0.6}
            style={[styles.layout, styles.buttonNoBg]}
         >
            <Text style={[styles.textButtonLogin, StylesText.fonts, { textDecorationLine: 'underline' }]}>Đã có tài khoản! Đăng nhập!</Text>
         </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
   fill: {
      marginTop: 50,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },
   layout: {
      width: width * 0.7,
      padding: 10,
      borderRadius: 3,
   },
   textInput: {
      fontSize: 16,
      backgroundColor: 'white',
      color: '#000',
      marginBottom: 10,
      paddingLeft: 10,
   },
   buttonLogin: {
      marginTop: 15,
      backgroundColor: '#7C6BD7',
      alignItems: 'center',
      justifyContent: 'center'
   },
   textButtonLogin: {
      textAlign: 'center',
      fontSize: 14,
      color: '#FFF'
   },
   buttonNoBg: {
      marginTop: 7,
      backgroundColor: 'rgba(0,0,0,0)',
      height: 20
   }
})
