import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BoxCheckOut from './BoxCheckOut';
import StylesText from '../../styles/StylesText';
import styles from './Styles';
import { Icon } from 'native-base';

export default class BoxPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BoxCheckOut title={"PAYMENT METHOD"}>
         <View style={styles.viewAddress}>
            <View style={styles.fill}>
               <Text style={[StylesText.text, styles.textNameAddress]}>Master Card ending **00</Text>
            </View>
            <View style={styles.justCenter}>
               <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, StylesText.colorText]} />
            </View>
         </View>
      </BoxCheckOut>
    );
  }
}
