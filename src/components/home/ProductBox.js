import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class ProductBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      // console.log(`http://192.168.1.34/ShopAny/public/image/product/${this.props.item.image}`)
      const { item, id } = this.props;
      return (
         <View style={[styles.fill, styles.marginRight, styles.marginLeft]}>
            <TouchableWithoutFeedback
               onPress={() => this.props.navigate('ProductDetail', {id: item.id, item: item})}
            >
               <View style={styles.viewImage}>
                  <Image style={styles.imageProduct} blurRadius={0.2} source={{uri: `http://192.168.1.111/ShopAny/public/image/product/thump/thump_${this.props.item.image}`}} />
               </View>
               <View style={styles.viewInfo}>
                  <Text numberOfLines={1} style={styles.textName}>{`${item.name}`}</Text>
                  <Text style={styles.textPrice}>{item.price}K</Text>
               </View>
            </TouchableWithoutFeedback>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   fill: {
      width: (width) / 3,
      marginRight: 20,
      height: 160,
      backgroundColor: '#FFF',
      borderColor: '#7C6BD7',
      borderWidth: 0.0,
      marginBottom: 5,
      borderRadius: 7,
      elevation: 5,
      marginTop: 5,
   },
   marginLeft: {
      marginLeft: 20,
   },
   marginRight: {
      marginRight: 15,
   },
   viewImage: {
      width: '100%',
      height: 110,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageProduct: {
      width: '100%',
      height: '100%',
      
      borderTopLeftRadius: 7,
      borderTopRightRadius: 7,
      
   },
   viewInfo: {
      alignItems: 'flex-start',
      marginHorizontal: 8,
   },
   textName: {
      marginTop: 5,
      color: '#1E2D3E',
      fontSize: 12,
   },
   textPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#7C6BD7',
   }
})
