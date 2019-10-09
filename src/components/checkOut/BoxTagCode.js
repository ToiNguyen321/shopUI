import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, TextInput, TouchableOpacity } from 'react-native';
import StylesText from '../../styles/StylesText';
import styles from './Styles';
import { Icon } from 'native-base';
export default class BoxTagCode extends Component {
   constructor(props) {
      super(props);
      this.state = {
         textCodeTag: "Add Promo Code",
         hideTextInputTag: new Animated.Value(0),
         isHideTextInputTag: true
      };
   }
   _hideTextInput = () => {
      let toValue = 1;
      if(this.state.isHideTextInputTag === false) toValue = 0;
      Animated.timing(
        this.state.hideTextInputTag,
        {
          toValue: toValue,
          duration: 500
        }
      ).start();
      this.setState({
        isHideTextInputTag: !this.state.isHideTextInputTag
      })
    }
   render() {
      const height = this.state.hideTextInputTag.interpolate({
         inputRange: [0, 1],
         outputRange: [0, 40],
         extrapolate: 'clamp'
       })
      return (
         <View style={[styles.box]}>
            <View style={[styles.boxFlexRow]}>
               <View style={styles.viewTagCode}>
                  <Icon name='price-tag' type="Entypo" style={[styles.iconTagCode, StylesText.colorText]} />
                  <Text style={[StylesText.text, styles.textTagCode]}>{this.state.textCodeTag}</Text>
               </View>
               <View style={styles.justCenter}>
                  <TouchableOpacity
                     onPress={() => this._hideTextInput()}
                  >
                     <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, StylesText.colorText]} />
                  </TouchableOpacity>
               </View>
            </View>
            <Animated.View style={{ overflow: 'hidden', height, marginTop: 10 }}>
               <TextInput
                  placeholder="Add Promo Code"
                  style={[styles.textInputTag]}
                  onChangeText={(textCodeTag) => this.setState({ textCodeTag })}
               />
            </Animated.View>
         </View>
      );
   }
}