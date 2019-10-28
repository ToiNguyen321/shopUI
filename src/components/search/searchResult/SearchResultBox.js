import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StylesText from '../../../styles/StylesText';
import { colorIconCam } from '../../../styles/Color';
import { IMAGE } from '../../../config';

export default class SearchResultBox extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const item = this.props.item;
      // console.log(item.image)
      return (
            <View style={styles.fill}>
               <TouchableOpacity
                  onPress={() => this.props.navigation.navigate('ProductDetail', {id: item.id, item: item})}
                  activeOpacity={0.7}
               >
               <View style={styles.container}>
                  <View style={styles.viewImage}>
                     <Image source={{uri: `${IMAGE}product/${item.image}`}} style={styles.image} />
                  </View>
                  <Text numberOfLines={1} style={[styles.textTitle, StylesText.text]}>{item.name}</Text>
                  <View style={styles.viewPriceRate}>
                     <Text style={[styles.textPrice, StylesText.text]}>{item.price}K</Text>
                     <View style={styles.viewRate}>
                        <Icon style={styles.iconRate} name="star" type="FontAwesome" />
                        <Text style={[styles.textRate]}>{item.rate}</Text>
                     </View>
                  </View>
               </View>
               </TouchableOpacity>
            </View>
      )
   }
}

const styles = StyleSheet.create({
   fill: {
      // flex: 1,
      padding: 10,
      width: Dimensions.get('window').width / 2 - 10
   },
   container: {
      backgroundColor: 'white',
      borderRadius: 10,
   },
   viewImage: {
      width: '100%',
      height: 150,
      justifyContent: 'center',
      alignItems: 'center'
   },
   image: {
      width: '100%',
      height: '100%',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
   },
   textTitle: {
      marginTop: 10,
      fontSize: 15,
      paddingLeft: 10,
   },
   viewPriceRate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: 5,
      paddingHorizontal: 10,
      paddingBottom: 10,
   },
   textPrice: {
      fontSize: 13,
      fontWeight: 'bold',
   },
   viewRate: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 40,
      alignItems: 'center',
      borderRadius: 10,
      backgroundColor: colorIconCam,
      
   },
   iconRate: {
      fontSize: 12,
      color: '#FFF',
      paddingRight: 3,
   },
   textRate: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#FFF'
   }

})
