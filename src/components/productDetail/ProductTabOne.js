import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { FlatList, TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
const { width, height } = Dimensions.get('window');

export default class ProductTabOne extends Component {
   constructor(props) {
      super(props);
      this.state = {
         colorActive: 0,
         sizeActive: 0,
         data: [
            {
               title: "Select color",
               data: [
                  { id: 1, color: 'red' },
                  { id: 2, color: 'black' },
                  { id: 3, color: 'white' },
                  { id: 3, color: 'blue' },
                  { id: 3, color: 'yellow' },
                  { id: 3, color: 'white' },
                  { id: 2, color: 'black' },
               ],
            },
            {
               title: "Select size (US)",
               data: [
                  { id: 1, size: 39 },
                  { id: 2, size: 40 },
                  { id: 3, size: 41 },
               ]
            }
         ]
      };
   }
   _setColorActive = (colorActive) => {
      this.setState((prevState, prevProps) => {
            if(prevState.colorActive !== colorActive)
               return({ colorActive }) 
         }
      )
   }
   _setSizeActive = (sizeActive) => {
      this.setState((prevState, prevProps) => {
            if(prevState.sizeActive !== sizeActive)
               return({ sizeActive }) 
         }
      )
   }
   buttonColor = (item,index) => (
      <TouchableOpacity
         key={`${index}`}
         onPress={this._setColorActive.bind(this, index)}
      >
         <View 
            style={[
               styles.viewColor,
               item.color === 'white' ? styles.viewColorBorder : null,
               { backgroundColor: item.color}
            ]}
         >
            {
               this.state.colorActive === index ?
               <Icon
                  style={{ color: item.color === 'white' ? 'black' : 'white' }} 
                  name="check" 
                  type="Entypo"
               />
               : null
            }
         </View>
      </TouchableOpacity>
   )

   buttonSize = (item, index) => (
      <TouchableOpacity
         key={`${index}`}
         onPress={this._setSizeActive.bind(this, index)}
      >
         <View style={[styles.viewColor, styles.viewSize, this.state.sizeActive === index ? styles.viewSizeActive : null]}>
            <Text 
               style={
                  this.state.sizeActive === index ? styles.textSize : null
               }>{item.size}</Text>
         </View>
      </TouchableOpacity>
   )
   viewFooter = () => <View style={styles.footerMarginRight}></View>
   render() {
      return (
         <View>
            <View style={styles.container}>
               <Text style={styles.textTitle}>{this.state.data[0].title}</Text>
               <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
               >
                  {
                     this.state.data[0].data.map((item, index) => this.buttonColor(item, index))
                  }
                  {
                     this.viewFooter()
                  }
               </ScrollView>
            </View>
            <View style={styles.container2}>
               <Text style={styles.textTitle}>{this.state.data[1].title}</Text>
               <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
               >
                  {
                     this.state.data[1].data.map((item, index) => this.buttonSize(item, index))
                  }
                  {
                     this.viewFooter()
                  }
               </ScrollView>
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   footerMarginRight: {
      marginRight: 20
   },
   container: {
      marginTop: 10,
   },
   container2: {
      marginTop: 30,
   },
   textTitle: {
      marginLeft: 20,
      color: '#515C6F',
      fontSize: 14,
      textTransform: 'uppercase',
      marginBottom: 10,
   },
   viewColor: {
      width: 45,
      height: 45,
      marginLeft: 20,
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
   },
   viewColorBorder: {
      borderColor: 'black',
      borderWidth: 1
   },
   viewSize: {
      width: 80,
      height: 37,
      borderWidth: 1,
      borderColor: '#FF6969',
      borderRadius: 10,
   },
   viewSizeActive: {
      width: 85,
      height: 40,
   },
   textSize: {
      color: '#FF6969',
      fontSize: 18,
      fontWeight: 'bold'
   }
});