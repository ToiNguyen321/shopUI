import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Header from '../Header';
import { ScrollView, FlatList, TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styleText from '../../styles/StylesText';

import { Icon } from 'native-base';
import { colorBoderButton, colorBoder, colorIconCam, colorBackground } from '../../styles/Color';
import CheckOutCart from '../cart/CheckOutCart';
import CartBox from '../cart/CartBox';
export default class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 6, number: 2, color: ['gray', 'blue'], name: "V Neck Shirt - Pink", price: 11.99, rate: 4, image: require('../../assets/images/products/Image2.png') },
        { id: 7, number: 3, color: ['red', 'back'], name: "V Neck Shirt - Pink", price: 1.99, rate: 4.4, image: require('../../assets/images/products/Image4.png') },            
        { id: 8, number: 1, color: ['yellow', 'blue'], name: "V Neck Shirt - Pink", price: 4.99, rate: 4, image: require('../../assets/images/products/Image6.png') },
        { id: 9, number: 6, color: ['yellow', 'blue'], name: "V Neck Shirt - Pink", price: 10.99, rate: 4.5, image: require('../../assets/images/products/Image5.png') },
        { id: 10, number: 4, color: ['gray', 'yellow'], name: "V Neck Shirt - Pink", price: 7.99, rate: 4.4, image: require('../../assets/images/products/Image1.png') }
      ],
      hideTextInputTag: new Animated.Value(0),
      isHideTextInputTag: true,
      textCodeTag: "Add Promo Code"
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
      inputRange: [0,1],
      outputRange: [0, 50],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.fill}>
        <Header title={'Checkout'} close={true} navigation={this.props.navigation} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          <View style={styles.box}>
              <Text style={[styleText.text, styles.textBox]}>SHIPPING ADDRESS</Text>
              <View style={styles.viewAddress}>
                <View style={styles.fill}>
                  <Text style={[styleText.text, styles.textNameAddress]}>John Doe</Text>
                  <Text style={[styleText.text, styles.textAddress]}>No 123, Sub Street, Main Street,City Name, Province, Country</Text>
                </View>
                <View style={styles.justCenter}>
                  <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, styleText.colorText]} />
                </View>
              </View>
          </View>
          <View style={styles.box}>
            <Text style={[styleText.text, styles.textBox]}>PAYMENT METHOD</Text>
            <View style={styles.viewAddress}>
              <View style={styles.fill}>
                <Text style={[styleText.text, styles.textNameAddress]}>Master Card ending **00</Text>
              </View>
              <View style={styles.justCenter}>
                <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, styleText.colorText]} />
              </View>
            </View>
          </View>
          <View style={styles.box}>
            <Text style={[styleText.text, styles.textBox]}>ITEMS</Text>
            
            <View style={styles.fill}>
              <FlatList
                data={this.state.data}
                keyExtractor={(item, index) => `${index}`}
                renderItem={({item}) => <CartBox item={item} />}
              />
            </View>
          </View>
          <View style={[styles.box]}>
            <View style={[styles.boxFlexRow]}>
              <View style={styles.viewTagCode}>
                <Icon name='price-tag' type="Entypo" style={[styles.iconTagCode, styleText.colorText]} />
                <Text style={[styleText.text, styles.textTagCode]}>{this.state.textCodeTag}</Text>
              </View>
              <View style={styles.justCenter}>
                <TouchableOpacity
                  onPress={() => this._hideTextInput()}
                >
                  <Icon name='rightcircle' type="AntDesign" style={[styles.iconBox, styleText.colorText]} />
                </TouchableOpacity>
              </View>
            </View>
            <Animated.View style={{ overflow: 'hidden', height }}>
              <TextInput
                placeholder="Add Promo Code"
                style={[styles.textInputTag ]}
                onChangeText={(textCodeTag) => this.setState({ textCodeTag })}
              />
            </Animated.View>
          </View>
        </ScrollView>
        <CheckOutCart nameButton={"PLACE ORDER"} nameNavigate='Home' navigation={this.props.navigation} priceTotal={100} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    fill: {
      flex: 1,
      backgroundColor: colorBackground
    },
    scrollView: { paddingHorizontal: 20, paddingBottom: 69 },
    box: {
      paddingVertical: 20,
      borderBottomColor: colorBoder,
      borderBottomWidth: 1
    },

    boxFlexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    justCenter: {
      justifyContent: 'center'
    },
    textBox: {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 10,
      opacity: 0.5,
    },
    iconBox: {
      fontSize: 18,
      color: colorBoderButton,
      marginRight: 2,
      opacity: 0.5,
    },
    viewAddress: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textNameAddress: {
      fontSize: 15,
      fontWeight: 'bold',
    },
    textAddress: {
      marginTop: 10,
      paddingRight: 150,
      lineHeight: 20,
    },
    viewTagCode: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    iconTagCode: {
      fontSize: 20,
      color: colorIconCam,
      marginRight: 10,
    },
    textTagCode: {
      color: colorIconCam,
      fontSize: 16,
    },
    textInputTag: {
      paddingVertical: 10,
      borderRadius: 20,
      marginTop: 10,
      backgroundColor: '#dcdcdc',
      justifyContent: 'center',
      textAlign: 'left',
      paddingLeft: 20,
    }

});
