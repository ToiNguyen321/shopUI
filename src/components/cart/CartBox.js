import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { connect } from 'react-redux'
import * as actions from '../../redux/Actions'
import { colorBoderButton, colorIconCam, colorBoder } from '../../styles/Color';
import StylesText from '../../styles/StylesText';

const { width } = Dimensions.get('window')
class CartBox extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      const item = this.props.item;
      let color = "";
      let numberTotal = 0;
      return (
         <View>
         {
            item.amount > 0 ?
               <View style={styles.fill}>
                  <View style={styles.viewImage}>
                     <Image style={styles.image} source={item.image} />
                  </View>
                  <View style={styles.viewInfo}>
                     <Text numberOfLines={1} style={[styles.name, StylesText.text]}>{item.name}</Text>
                     {/* <Text numberOfLines={1} style={[styles.color, StylesText.text]}>{color}</Text> */}
                     <Text numberOfLines={1} style={styles.price}>${item.price}</Text>
                     <View style={styles.viewButton}>
                        <TouchableOpacity
                           onPress={() => this.props.actionAddCart({id: item.id})}
                        >
                           <Icon name="minuscircle" type="AntDesign" style={styles.iconButton} />
                        </TouchableOpacity>
                        <Text style={styles.textNumberProduct}>{item.amount}</Text>
                        <TouchableOpacity
                           onPress={() => this.props.actionRemoveCart({id: item.id})}
                        >
                           <Icon name="pluscircle" type="AntDesign" style={styles.iconButton} />
                        </TouchableOpacity>
                     </View>
                  </View>
               </View>
            : null
         }
         </View>
      );
   }
}

export default connect(null, actions)(CartBox)
const styles = StyleSheet.create({
   fill: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 20,
      // paddingHorizontal: 20,
   },
   viewImage: {
      width: 100,
      height: 100,
      justifyContent: 'center',
      backgroundColor: '#FFF',
      borderRadius: 100,
      alignItems: 'center'
   },
   image: {
      width: '70%',
      height: '70%',
      resizeMode: 'contain'
   },
   viewInfo: {
      flex: 1,
      height: 110,
      marginLeft: 20,
      paddingBottom: 10,
      justifyContent: 'space-between',
      borderBottomWidth: 1,
      borderColor: 'rgba(114,124,142,0.3)'
   },
   name: {
      fontSize: 18,
   },
   color: {
      fontSize: 14,
      marginTop: -10
   },
   price: {
      fontSize: 14,
      color: colorIconCam,
      fontWeight: '900',
   },
   viewButton: {
      flexDirection: 'row',
      justifyContent: 'flex-start'
   },
   iconButton: {
      color: colorBoderButton,
      fontSize: 20,
   },
   textNumberProduct: {
      paddingHorizontal: 10,
   }
})