import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { Icon } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
export default class ProductReview extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }
   renderStar = (numberRate, isRate) => {
      const arrayRate = Array.from({ length: numberRate });
      
      return arrayRate.map((item, index) =>
         <Icon 
            key={`${index}`}
            name="star" 
            type="FontAwesome" 
            style={isRate === true ? styles.iconRate : styles.iconNoRate} />
      )
   }
   render() {
      const item = this.props.item;
      // console.log(item)
      return (
         <View style={styles.container}>
            <View style={styles.viewAvatar}>
               <Image
                  style={styles.imageAvatar}
                  source={require('../../../assets/images/user.jpg')}
               />
            </View>
            <View style={styles.viewContent}>
               <View style={[styles.viewRateDate]}>
                  <View style={[styles.fill, styles.viewRate]}>
                     {
                        this.renderStar(item.rate, true)
                     }
                     {
                        this.renderStar(5 - item.rate, false)
                     }
                  </View>
                  <View style={[styles.fill]}>
                     <Text style={styles.textTime}>{item.time}</Text>
                  </View>
               </View>
               <Text style={styles.textName}>{item.name}</Text>
               <Text numberOfLines={2} style={styles.textReview}>{item.content}</Text>
               <ScrollView 
                  horizontal
                  showsHorizontalScrollIndicator={false}
               >
                     {
                        item.imageReview.map((item, index) => <Image key={`${index}`} source={require('../../../assets/images/user.jpg')} style={styles.imageReview} />)
                     }
               </ScrollView>
            </View>
         </View>
      );
   }
}
const styles = StyleSheet.create({
   fill: {
      flex: 1
   },
   container: {
      width,
      flexDirection: 'row',
      paddingHorizontal: 20,
      paddingVertical: 20,
   },
   viewAvatar: {
      width: 80,
   },
   imageAvatar: {
      width: 70,
      height: 70,
      borderRadius: 70,
   },
   viewContent: {
      flexDirection: 'column',
      flex: 1,
   },
   viewRateDate: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 20,
   },
   viewRate: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'flex-start'
   },
   iconRate: {
      fontSize: 12,
      marginRight: 1,
      color: '#FF6969'
   },
   iconNoRate: {
      fontSize: 12,
      marginRight: 1,
      color: '#727C8E'
   },
   textTime: {
      color: '#727C8E',
      textAlign: 'right'
   },
   textName: {
      marginTop: 5,
      fontWeight: '900',
      color: '#727C8E',
      fontSize: 16,
   },
   textReview: {
      marginTop: 5,
      fontSize: 14,
      color: '#727C8E',
   },
   imageReview: {
      width: 50,
      height: 50,
      borderRadius: 2,
      marginRight: 10,
   }
})
