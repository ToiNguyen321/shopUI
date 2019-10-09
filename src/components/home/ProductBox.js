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
      const { item, index } = this.props;
      return (
         <View style={[styles.fill, styles.marginRight, styles.marginLeft]}>
            <TouchableWithoutFeedback
               onPress={() => this.props.navigate('ProductDetail', {id: item.id, item: item})}
            >
               <View style={styles.viewImage}>
                  <Image style={styles.imageProduct} source={this.props.item.image} />
               </View>
               <View style={styles.viewInfo}>
                  <Text style={styles.textName}>{`${item.name}`}</Text>
                  <Text style={styles.textPrice}>${item.price}</Text>
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
      height: 145,
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
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
   },
   imageProduct: {
      maxWidth: '90%',
      maxHeight: 90
   },
   viewInfo: {
      alignItems: 'flex-start',
      marginLeft: 10,
   },
   textName: {
      color: '#1E2D3E',
      fontSize: 12,
   },
   textPrice: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#7C6BD7',
   }
})
