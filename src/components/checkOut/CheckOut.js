import React, { Component } from 'react';
import { View, Animated } from 'react-native';
import Header from '../Header';
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles';
import CheckOutCart from '../cart/CheckOutCart';
import BoxTagCode from './BoxTagCode';
import BoxAddress from './BoxAddress';
import BoxPayment from './BoxPayment';
import BoxItems from './BoxItems';
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

  render() {
    return (
      <View style={styles.fill}>
        <Header title={'Checkout'} close={true} navigation={this.props.navigation} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          <BoxAddress />
          <BoxPayment />
          <BoxItems data={this.state.data} />
          <BoxTagCode />
        </ScrollView>
        <CheckOutCart nameButton={"PLACE ORDER"} nameNavigate='CheckOutSuccess' navigation={this.props.navigation} priceTotal={100} />
      </View>
    );
  }
}
