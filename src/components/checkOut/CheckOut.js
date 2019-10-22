import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../Header';
import { connect } from 'react-redux'
import { ScrollView } from 'react-native-gesture-handler';
import styles from './Styles';
import CheckOutCart from '../cart/CheckOutCart';
import BoxTagCode from './BoxTagCode';
import BoxAddress from './BoxAddress';
import BoxPayment from './BoxPayment';
import BoxItems from './BoxItems';

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      textCodeTag: "Add Promo Code"
    };
  }

  render() {
    let totalMoney = 0;
      this.props.carts.map(
         ({info, amount}) => totalMoney += (info.price - (info.discount * info.price / 100)) * amount
      );
    return (
      <View style={styles.fill}>
        <Header title={'Checkout'} close={true} navigation={this.props.navigation} />
        <ScrollView
          contentContainerStyle={styles.scrollView}
        >
          <BoxAddress />
          <BoxPayment />
          <BoxItems data={this.props.carts} />
          <BoxTagCode />
        </ScrollView>
        <CheckOutCart nameButton={"PLACE ORDER"} nameNavigate='CheckOutSuccess' navigation={this.props.navigation} totalMoney={totalMoney} />
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    carts: state.carts
  }
}
export default connect(mapStateToProps, null)(CheckOut)