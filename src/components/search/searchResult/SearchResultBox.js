import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import { Icon } from 'native-base';
import { TouchableOpacity } from 'react-native-gesture-handler';
import StylesText from '../../../styles/StylesText';
import { colorIconCam } from '../../../styles/Color';

export default class SearchResultBox extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      const item = this.props.item
      return (
         
            <View style={styles.fill}>
               <TouchableOpacity
                  activeOpacity={0.7}
               >
               <View style={styles.container}>
                  <View style={styles.viewImage}>
                     <Image source={item.image} style={styles.image} />
                  </View>
                  <Text numberOfLines={1} style={[styles.textTitle, StylesText.text]}>{item.name}</Text>
                  <View style={styles.viewPriceRate}>
                     <Text style={[styles.textPrice, StylesText.text]}>${item.price}</Text>
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
      flex: 1,
      padding: 10,
   },
   container: {
      backgroundColor: 'white',
      borderRadius: 10
   },
   viewImage: {
      height: 150,
      justifyContent: 'center',
      alignItems: 'center'
   },
   image: {
      maxWidth: '70%',
      maxHeight: '70%',
      resizeMode: 'contain'
   },
   textTitle: {
      fontSize: 15,
      paddingLeft: 20,
   },
   viewPriceRate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingBottom: 15,
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
