import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Header'
import { FlatList } from 'react-native-gesture-handler'
import SearchResultBox from './SearchResultBox'
import { Icon, Input, Item } from 'native-base'

export default class SearchResult extends Component {
   constructor(props){
      super(props)
      this.state={
         data: [
            { id: 1, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.4, image: require('../../../assets/images/products/Image1.png') },
            { id: 2, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.7, image: require('../../../assets/images/products/Image2.png') },
            { id: 3, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.9, image: require('../../../assets/images/products/Image3.png') },
            { id: 4, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.0, image: require('../../../assets/images/products/Image5.png') },
            { id: 5, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.8, image: require('../../../assets/images/products/Image6.png') },
            { id: 6, name: "V Neck Shirt - Pink", price: 11.99, rate: 4, image: require('../../../assets/images/products/Image2.png') },
            { id: 7, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.4, image: require('../../../assets/images/products/Image4.png') },            { id: 8, name: "V Neck Shirt - Pink", price: 11.99, rate: 4, image: require('../../../assets/images/products/Image6.png') },
            { id: 9, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.5, image: require('../../../assets/images/products/Image5.png') },
            { id: 10, name: "V Neck Shirt - Pink", price: 11.99, rate: 4.4, image: require('../../../assets/images/products/Image1.png') }
          ],
          textSearch: "Shirts"
      }
   }
   componentDidMount(){
      let textSearch = this.props.navigation.getParam('textSearch', '');
      this.setState({
         textSearch
      })
   }
   _onChangeText = (textSearch) => {
      this.setState({
         textSearch
      })
   }
   _searchFunction = () => {
      alert(this.state.textSearch)
   }
   render() {
      return (
         <View style={styles.fill}>
            <Header back={true} searchFunction={this._searchFunction} onChangeText={this._onChangeText} textSearch={this.state.textSearch} search={true} navigation={this.props.navigation} />
            
            <View style={styles.fill}>
               <FlatList
                  contentContainerStyle={styles.flatList}
                  numColumns={2}
                  onEndReachedThreshold={0.2}
                  onEndReached={() => alert('onEndReached')}
                  data={this.state.data}
                  keyExtractor={(item, index) => `${index}`}
                  renderItem={({item}) => <SearchResultBox item={item} />}
               />
            </View>
         </View>
      )
   }
}

const styles = StyleSheet.create({
   fill: {
      flex: 1,
      backgroundColor: '#F1F3F6'
   },
   flatList: {
      paddingHorizontal: 10,
   }
})

