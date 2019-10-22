import React, { Component } from 'react';
import { StyleSheet, FlatList, View, Text } from 'react-native';
import ProductBox from './ProductBox';
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { API, CMD } from '../../config';


class BoxProduct extends Component {
   constructor(props) {
      super(props);
      this.state = {
         dataProducts: this.props.dataProducts,
         page: 1,
         isFetch: false,
         isEnd: this.props.dataProducts.length >= 10 ? false : true,
      };
   }
   _onEndReached = async () => {
      let { isEnd, isFetch, page } = this.state;
      if(isEnd === false){
         let data = {
            cmd: CMD.GET_LIST_PRODUCT,
            idCatalog: this.props.idCatalog,
            page: page + 1
         }
         let url = `Api?data=${JSON.stringify(data)}`;
         fetch(API + url)
         .then(res=>res.json())
         .then(resJ => {
            if(resJ.status === 1){
               let resCatalog = resJ.data[0];
               if(typeof(resCatalog.products) !== 'undefined' && resCatalog.products.length > 0){
                  this.setState({
                     dataProducts: this.state.dataProducts.concat(resCatalog.products),
                     page: page + 1
                  })
               }else{
                  this.setState({
                     isEnd: true
                  })
               }
            }
         })
         .catch(ex => {
            console.error(ex);
         })
      }else{
         console.log("Hết sản phẩm")
      }
   }
   _seeAll = () => {
      this.props.navigate('ProductMore', {idCatalog: this.props.idCatalog})
   }
   render() {
      // console.log(this.props.dataProducts.length, this.state.isEnd)
      return (
         <View style={styles.container}>
            <View style={styles.viewTop}>
               <Text>{this.props.title}</Text>
               <TouchableOpacity
                  onPress={this._seeAll.bind(this)}
               >
                  <Text>See all</Text>
               </TouchableOpacity>
            </View>
            <FlatList
               horizontal={true}
               showsHorizontalScrollIndicator={false}
               scrollEventThrottle={1}
               onScroll={this.props.onScroll}
               style={styles.flatList}
               data={this.state.dataProducts}
               renderItem={({item, index}) => <ProductBox navigate={this.props.navigate} item={item} id={item.id} />}
               keyExtractor={(item, index) => `${index}`}
               onEndReached={this._onEndReached.bind(this)}
               onEndReachedThreshold={0.2}
            />
         </View>
      );
   }
}
export default connect(null, actions)(BoxProduct)
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