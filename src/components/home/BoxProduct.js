import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductBox from './ProductBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

export default class BoxProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
      };
   }

   render() {
      return (
         <View style={styles.container}>
            <View style={styles.viewTop}>
               <Text>{this.props.title}</Text>
               <TouchableOpacity>
                  <Text>See all</Text>
               </TouchableOpacity>
            </View>
            <FlatList
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               scrollEventThrottle={1}
               onScroll={this.props.onScroll}
               style={styles.flatList}
               data={this.props.data}
               renderItem={({item, index}) => <ProductBox item={item} index={index} />}
               keyExtractor={item => item.id}
               onEndReached={()=>alert('xxx')}
               onEndReachedThreshold={0.2}
            />
         </View>
      );
   }
}
const styles = StyleSheet.create({
   container: {
      paddingBottom: 20,
   },
   viewTop: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
   },
   flatList: {
      flex: 1,
   }
})