import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions'
import IconTab from '../../navigators/IconTab';
import Header from '../Header';
import { FlatList } from 'react-native-gesture-handler';
import CartBox from './CartBox';
import CheckOutCart from './CheckOutCart';
import { colorBackground } from '../../styles/Color';
import { dataProducts, dataCarts } from '../../common/dataProduct';
import { Button } from 'native-base';



class Cart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: dataCarts,
         dataCarts: this.props.carts,
         priceTotal: 0,
      };
   }
   componentDidMount() {
      let numberProduct = 0;
      let priceTotal = 0;
      this.state.data.forEach(item => {
         this.state.dataCarts.forEach(i => {
            if(item.id === i.id){
               priceTotal += item.price * i.amount;
               numberProduct += i.amount;
            }
         });
         
      });
      this.props.navigation.setParams({
         numberProduct: numberProduct
      });
   }
   static navigationOptions = ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => (
         <IconTab badgeCount={navigation.getParam('numberProduct', 0)} name={'shopping-cart'} size={25} type={'Feather'} color={tintColor} />
      )
   })
   render() {
      console.log(this.props)
      return (
         <View style={styles.fill}>
            <Header title={'Cart'} back={false} navigation={this.props.navigation} />
            <View style={styles.fill}>
               <FlatList
                  contentContainerStyle={styles.flatList}
                  data={this.props.carts}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({ item }) => <CartBox item={item} />}
               />
               
            </View>
            
            <CheckOutCart navigation={this.props.navigation} />
         </View>
      );
   }
}
const mapStateToProps = (state, ownProps) => {
   return {
      carts: state.carts
   }
}
export default connect(mapStateToProps, actions)(Cart)
const styles = StyleSheet.create({
   fill: {
      flex: 1,
      backgroundColor: colorBackground
   },
   flatList: {
      paddingBottom: 69,
      paddingHorizontal: 20,
   }
})