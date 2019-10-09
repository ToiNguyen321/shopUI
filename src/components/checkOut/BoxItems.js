import React, { Component } from 'react';
import { View, Text } from 'react-native';
import styles from './Styles';
import CartBox from '../cart/CartBox';
import BoxCheckOut from './BoxCheckOut';

export default class BoxItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <BoxCheckOut title={"ITEMS"}>
         <View style={[styles.fill]}>
            {
               this.props.data.map((item, index)=> <CartBox key={index} item={item} />)
            }
         </View>
      </BoxCheckOut>
    );
  }
}
