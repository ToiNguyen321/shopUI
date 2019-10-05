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
         <View style={[styles.fill, (index + 1) % 3 === 0 ? styles.marginRight : null, (index) % 3 === 0 ? styles.marginLeft : null]}>
            <TouchableWithoutFeedback
               onPress={() => alert('xxx')}
            >
               <View style={styles.viewImage}>
                  <Image source={this.props.item.image} />
               </View>
               <View style={styles.viewInfo}>
                  <Text style={styles.textName}>Floral Dress</Text>
                  <Text style={styles.textPrice}>$49.99</Text>
               </View>
            </TouchableWithoutFeedback>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   fill: {
      width: (width - 40 - 20) / 3,
      marginRight: 10,
      height: 145,
      backgroundColor: '#FFF',
      borderColor: '#7C6BD7',
      borderWidth: 0.0,
      marginBottom: 5,
      borderRadius: 7,
      elevation: 3,
      marginTop: 5,
   },
   marginLeft: {
      marginLeft: 20,
   },
   marginRight: {
      marginRight: 20,
   },
   viewImage: {
      width: '100%',
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
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
