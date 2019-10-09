import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import StylesText from '../../styles/StylesText';
import { colorBorder } from '../../styles/Color';

const BoxCheckOut = (props) => (
   <View style={[styles.box]}>
        <Text style={[StylesText.text, styles.textBox]}>{props.title}</Text>
        {props.children}
    </View>
);

export default BoxCheckOut;

const styles = StyleSheet.create({
   box: {
      paddingVertical: 20,
      borderBottomColor: colorBorder,
      borderBottomWidth: 1
    },
    textBox: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 10,
      opacity: 0.5,
    },
})