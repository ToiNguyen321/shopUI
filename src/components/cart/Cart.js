import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import IconTab from '../../navigators/IconTab';
import Header from '../Header';
import { FlatList } from 'react-native-gesture-handler';
import CartBox from './CartBox';
import CheckOutCart from './CheckOutCart';



export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
       numberProduct: 3,
       data: [
         { id: 6, number: 2, color: ['gray', 'blue'], name: "V Neck Shirt - Pink", price: 11.99, rate: 4, image: require('../../assets/images/products/Image2.png') },
         { id: 7, number: 3, color: ['red', 'back'], name: "V Neck Shirt - Pink", price: 1.99, rate: 4.4, image: require('../../assets/images/products/Image4.png') },            
         { id: 8, number: 1, color: ['yellow', 'blue'], name: "V Neck Shirt - Pink", price: 4.99, rate: 4, image: require('../../assets/images/products/Image6.png') },
         { id: 9, number: 6, color: ['yellow', 'blue'], name: "V Neck Shirt - Pink", price: 10.99, rate: 4.5, image: require('../../assets/images/products/Image5.png') },
         { id: 10, number: 4, color: ['gray', 'yellow'], name: "V Neck Shirt - Pink", price: 7.99, rate: 4.4, image: require('../../assets/images/products/Image1.png') }
       ],
    };
  }
  componentDidMount(){
   this.props.navigation.setParams({
      numberProduct: this.state.numberProduct
   });
  }
  static navigationOptions = ({navigation}) => ({
      tabBarIcon: ({tintColor}) =>(
         <IconTab badgeCount={navigation.getParam('numberProduct', 0)} name={'shopping-cart'} size={25} type={'Feather'} color={tintColor} />
      )
   })
  render() {
     let priceTotal = 0;
     this.state.data.map(i => priceTotal+=i.number * i.price);
    return (
      <View style={styles.fill}>
        <Header title={'Cart'} back={false} navigation={this.props.navigation} />
        <View style={styles.fill}>
            <FlatList
               contentContainerStyle={styles.flatList}
               // onEndReachedThreshold={0.2}
               // onEndReached={() => alert('onEndReached')}
               data={this.state.data}
               keyExtractor={(item, index) => `${index}`}
               renderItem={({item}) => <CartBox item={item} />}
            />
         </View>
         <CheckOutCart navigation={this.props.navigation} priceTotal={priceTotal} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
   fill: {
      flex: 1,
      backgroundColor: '#F1F3F6'
   },
   flatList: {
      paddingBottom: 10,
   }
})