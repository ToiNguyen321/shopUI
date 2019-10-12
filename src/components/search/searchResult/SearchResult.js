import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Header'
import { FlatList } from 'react-native-gesture-handler'
import SearchResultBox from './SearchResultBox'
import { Icon, Input, Item } from 'native-base'
import { dataProducts } from '../../../common/dataProduct'

export default class SearchResult extends Component {
   constructor(props){
      super(props)
      this.state={
         data: dataProducts,
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
                  renderItem={({item}) => <SearchResultBox item={item} navigation={this.props.navigation} />}
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

