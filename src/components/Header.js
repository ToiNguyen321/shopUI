import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import { TouchableWithoutFeedback, TouchableNativeFeedback } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window')
export default class Header extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <View style={styles.fill}>
            <View >
               {
                  this.props.back ?
                  <TouchableNativeFeedback
                     style={styles.buttonBack}
                     onPress={()=>alert('Back')}
                  >
                     <Icon name="arrow-back" type={'Ionicons'} size={20} />
                  </TouchableNativeFeedback>
                   : 
                   <Text style={[ styles.textTitle ]}>{this.props.title}</Text>
               }
               
            </View>
            <View style={[ styles.viewLeft ]}>
               <TouchableWithoutFeedback
                  onPress={()=>alert('Cart')}
                  style={styles.buttonCart}
               >
                  <View style = {styles.viewnumberProduct}>
                     <Text style={styles.numberProduct}>20</Text>
                  </View>
                  <Icon 
                     name="cart"
                     size={15} 
                     style={[ styles.iconUser ]} />
               </TouchableWithoutFeedback>
               <TouchableWithoutFeedback>
                  <Image 
                     style={[ styles.imageUser ]}
                     source={require('../assets/images/user.jpg')} 
                  />
               </TouchableWithoutFeedback>
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   fill: {
      width,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0)',
      paddingRight: 20
   },
   textTitle: {
      color: '#1E2D3E',
      fontWeight: '900',
      fontSize: 21
   },
   buttonBack: { 
      paddingHorizontal: 20, 
      paddingVertical: 10 
   },
   viewLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   iconUser: {
      marginRight: 10,
      // color: '#FFF'
      fontSize: 25,
   },
   viewnumberProduct: {
      position: 'absolute',
      top: 5, 
      right: 5,
      zIndex: 9,
      minHeight: 15,
      minWidth: 15,
      backgroundColor: '#7C6BD7',
      borderRadius: 7.5,
   },
   buttonCart: { 
      position: 'relative', 
      height: '100%', 
      justifyContent: 'center' 
   },
   numberProduct: {
      fontSize: 10,
      fontWeight: 'bold',
      paddingVertical: 1,
      paddingHorizontal: 2,
      color: '#FFF',
      textAlign: 'center',
      
   },
   imageUser: {
      width: 25,
      height: 25,
      
   }

})
