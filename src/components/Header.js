import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon } from 'native-base';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
            <View style={{ flex: 1 }}>
               {
                  this.props.back ?
                     <Icon name="back" size={25} />
                   : 
                   <Text style={[ styles.textTitle ]}>{this.props.title}</Text>
               }
               
            </View>
            <View style={[ styles.viewLeft ]}>
               <TouchableWithoutFeedback>
                  <Icon name="home" size={25} style={[ styles.iconUser ]} />
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
      paddingHorizontal: 15,
   },
   textTitle: {
      color: '#1E2D3E',
      fontWeight: '900',
      fontSize: 21
   },
   viewLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   iconUser: {
      marginRight: 10,
   },
   imageUser: {
      width: 25,
      height: 25,
      
   }

})
