import React, { Component } from 'react';
import { View, Text } from 'react-native';
import StylesText from '../../styles/StylesText';
import styles from './Styles';
import BoxCheckOut from './BoxCheckOut';
import { Icon } from 'native-base';
export default class BoxAddress extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BoxCheckOut title={"SHIPPING ADDRESS"}>
         <View style={styles.viewAddress}>
            <View style={styles.fill}>
               <Text style={[StylesText.text, styles.textNameAddress]}>John Doe</Text>
               <Text style={[StylesText.text, styles.textAddress]}>No 123, Sub Street, Main Street,City Name, Province, Country</Text>
            </View>
            <View style={styles.justCenter}>
               <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, StylesText.colorText]} />
            </View>
         </View>
      </BoxCheckOut>
    );
  }
}
