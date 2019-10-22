import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';
import { Icon, Item, Input } from 'native-base';
import { TouchableWithoutFeedback, TouchableNativeFeedback, TouchableOpacity } from 'react-native-gesture-handler';
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
                     onPress={()=>this.props.navigation.goBack()}
                  >
                     <Icon name="arrow-back" type={'Ionicons'} size={20} />
                  </TouchableNativeFeedback>
                   : 
                   <Text style={[ styles.textTitle ]}>{this.props.title}</Text>
               }
               
            </View>
            {
               this.props.search ? 
               <View style={styles.flex}>
                  <Item style={styles.itemSearch}>
                     <TouchableOpacity
                        onPress={()=> this.props.searchFunction()}
                     >
                        <Icon active name='search' style={styles.iconSearch} />
                     </TouchableOpacity>
                     <Input 
                        style={styles.textInputSearch}
                        onChangeText={(val) => this.props.onChangeText(val)}
                        placeholder="Search"
                        value={this.props.textSearch}
                        // onEndEditing={}
                     />
                  </Item>
               </View>
               : null
            }
            
            {
               this.props.close ? 
                  <View style={[ styles.viewLeft ]}>
                     <TouchableWithoutFeedback
                        onPress={()=>this.props.navigation.goBack()}
                     >
                        <Icon name="close" type={'AntDesign'} size={20} style={styles.iconClose} />
                     </TouchableWithoutFeedback>
                  </View>
               :
                  <View style={[ styles.viewLeft ]}>
                     {/* <TouchableWithoutFeedback
                        onPress={()=>alert('Cart')}
                        style={styles.buttonCart}
                     >
                        <View style = {styles.viewNumberProduct}>
                           <Text style={styles.numberProduct}>20</Text>
                        </View>
                        <Icon 
                           name={'shopping-cart'} type={'Feather'}
                           style={[ styles.iconUser, styles.iconClose ]} />
                     </TouchableWithoutFeedback> */}
                     <TouchableWithoutFeedback>
                        <Image 
                           style={[ styles.imageUser ]}
                           source={require('../assets/images/user.jpg')} 
                        />
                     </TouchableWithoutFeedback>
                  </View>
            }
            
         </View>
      );
   }
}
const styles = StyleSheet.create({
   flex: {
      flex: 1
   },
   itemSearch: {
      marginVertical: 5,
      borderRadius: 40, 
      backgroundColor: 'rgba(114,124,142,0.1)',
      paddingHorizontal: 10,
      marginRight: 10,
      height: 35,
      borderColor:'rgba(114,124,142,0.0)',
   },
   textInputSearch: { 
      fontSize: 15, 
      color: '#515C6F', 
      marginRight: 10
   },
   iconSearch: {
      color: '#FF6969',
      fontSize: 20,
   },
   fill: {
      width,
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgba(255,255,255,1.0)',
      paddingRight: 20,
      paddingLeft: 20,
      zIndex: 10,
   },
   textTitle: {
      color: '#515C6F',
      fontWeight: 'bold',
      fontSize: 24,
      textShadowOffset: {
         width: 2,
         height: 3
      },
      textShadowColor: 'rgba(81,92,111, 0.7)',
      textShadowRadius: 5
   },
   buttonBack: { 
      width: 40,
   },
   viewLeft: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center'
   },
   iconUser: {
      marginRight: 10,
      fontSize: 25,
   },
   viewNumberProduct: {
      position: 'absolute',
      top: 5, 
      right: 5,
      zIndex: 9,
      minHeight: 15,
      minWidth: 15,
      backgroundColor: '#FF6969',
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
      
   },
   iconClose: {
      color: '#FF6969'
   }

})
