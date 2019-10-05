import React, { Component } from 'react';
import { StyleSheet, Animated } from 'react-native';
import ProductBox from './ProductBox';

export default class Product extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
            <Animated.FlatList
               scrollEventThrottle={1}
               onScroll={this.props.onScroll}
               style={styles.flatList}
               numColumns={3}
               data={this.props.data}
               renderItem={({item, index}) => <ProductBox item={item} index={index} />}
               keyExtractor={item => item.id}
               onEndReached={()=>alert('xxx')}
               onEndReachedThreshold={0.2}
            />
         // </View>
      );
   }
}
const styles = StyleSheet.create({
   fill: {
      flex: 1
   },
   flatList: {
      // paddingHorizontal: 20,
      marginTop: 10,
      flex: 1,
   }
})