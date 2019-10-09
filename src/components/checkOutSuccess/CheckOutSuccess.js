import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { colorBackground, colorIconCam } from '../../styles/Color';
import StylesText from '../../styles/StylesText';

export default class CheckOutSuccess extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View style={styles.fill}>
        <View style={styles.viewIcon}>
          <Icon name="check" type="Entypo" style={styles.icon} />
        </View>
        <Text style={[StylesText.text, styles.textTitle]}> Order Placed! </Text>
        <Text style={[StylesText.text, styles.textContent]}> Your order was placed successfully. For more details, check All My Orders page under Profile tab </Text>
        <View style={[styles.viewButton]}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.button, styles.buttonCart]}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Text style={styles.buttonText}>GO TO HOME</Text>
            <Icon
              style={[styles.buttonIcon]}
              name="rightcircleo"
              type="AntDesign"
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  fill: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colorBackground
  },
  viewIcon: {
    width: 120,
    height: 120,
    backgroundColor: '#FFF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  icon: {
    fontSize: 70,
    color: colorIconCam,
  },
  textTitle: {
    fontSize: 30,
    marginBottom: 20
  },
  textContent: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 22,
    width: '70%'
  },
  viewButton: { 
    marginTop: 35 
  },
  button: {
    flexDirection: 'row',
    width: 170,
    height: 50,
    borderRadius: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colorIconCam,
    paddingRight: 10,
    paddingLeft: 20,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  buttonIcon: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
});