import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import IconTab from '../../navigators/IconTab';
import Header from '../Header';
import { FlatList } from 'react-native-gesture-handler';
import CartBox from './CartBox';
import CheckOutCart from './CheckOutCart';
import { colorBackground } from '../../styles/Color';
import { dataProducts, dataCarts } from '../../common/dataProduct';



class Cart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         priceTotal: 0,
      };
   }
   componentDidMount() {
   }
   static navigationOptions = ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
         <IconTab badgeCount={navigation.getParam('numberProduct', 1)} name={'shopping-cart'} size={25} type={'Feather'} color={tintColor} />
      )
   })
   render() {
      let totalMoney = 0;
      this.props.carts.map(
         ({ info, amount }) => totalMoney += (info.price - (info.discount * info.price / 100)) * amount
      );
      return (
         <View style={styles.fill}>
            <Header title={'Cart'} back={false} navigation={this.props.navigation} />
            {
               this.props.carts.length > 0 ?
                  <View style={styles.fill}>
                     <View style={styles.fill}>
                        <FlatList
                           contentContainerStyle={styles.flatList}
                           data={this.props.carts}
                           keyExtractor={(item, index) => `${item.id}`}
                           renderItem={({ item }) => <CartBox item={item} />}
                        />
                     </View>
                     <CheckOutCart navigation={this.props.navigation} totalMoney={totalMoney} />
                  </View>
                  : <View style={styles.fill, styles.center}>
                     <Text>Giỏ hàng trống!</Text>
                  </View>
            }
         </View>
      );
   }
}
const mapStateToProps = (state, ownProps) => {
   return {
      carts: state.carts
   }
}
export default connect(mapStateToProps, null)(Cart)
const styles = StyleSheet.create({
   fill: {
      flex: 1,
      backgroundColor: colorBackground
   },
   flatList: {
      paddingBottom: 69,
      paddingHorizontal: 20,
   },
   center: {
      justifyContent: 'center',
      alignItems: 'center'
   }
})