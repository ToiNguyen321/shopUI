import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductBox from './ProductBox';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

export default class BoxProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data: this.props.data
      };
   }
   componentDidUpdate(prevProps){ 
      if(this.props.data !== prevProps.data){
        this.setState({
           data: this.props.data
        })
      }
   }
   // shouldComponentUpdate(nextProps, nextState){
   //    if(nextProps.data !== this.props.data){
   //       return true
   //    }
   // }
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
               data={this.state.data}
               renderItem={({item, index}) => <ProductBox navigate={this.props.navigate} item={item} index={item.id} />}
               keyExtractor={(item, index) => `${index}`}
               // onEndReached={()=>alert('xxx')}
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