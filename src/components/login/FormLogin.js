import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class FormLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
       name: "",
       pass: ""
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
  render() {
    return (
      <View style={styles.fill}>
         <TextInput 
            placeholder="Name"
            onChangeText={(val) => this._name}
            style={[styles.textInput, styles.layout]}
          />
         <TextInput 
            placeholder="Password"
            onChangeText={(val) => this._pass} 
            style={[styles.textInput, styles.layout]}
         />
         <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.layout, styles.buttonLogin]}
         >
            <Text style={styles.textButtonLogin}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.layout, styles.buttonNoBg]}
         >
            <Text style={styles.textButtonLogin}>Forgot Your Password?</Text>
         </TouchableOpacity>
         <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.layout, styles.buttonNoBg]}
         >
            <Text style={styles.textButtonLogin}>New Account</Text>
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
      height: 40,
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
