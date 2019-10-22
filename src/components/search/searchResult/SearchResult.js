import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Header from '../../Header'
import { FlatList } from 'react-native-gesture-handler'
import SearchResultBox from './SearchResultBox'
import { dataProducts } from '../../../common/dataProduct'
import { fetchDataGet } from '../../../common/Api'
import { CMD } from '../../../config'
import Loading from '../../loading/Loading'

export default class SearchResult extends Component {
   constructor(props){
      super(props)
      this.state={
         dataSearch: [],
         textSearch: "Shirts",
         page: 1,
         isEnd: false
      }
   }
   componentDidMount(){
      this.fetchData();
   }
   _onEndReached = () => {
      console.log("_onEndReached")
      this.fetchData();
   }
   fetchData(){
      let { page, dataSearch, isEnd } = this.state;
      if(isEnd === true) return false;
      let textSearch = this.props.navigation.getParam('textSearch', '');
      let data = { cmd: CMD.GET_PRODUCT, nameSearch: textSearch, page: page };
      let url = 'Api?data='+JSON.stringify(data);
      // console.log(url)
      fetchDataGet(url)
      .then(res=>res.json())
      .then(resJ => {
         // console.log(resJ.data.length >= 1)
         this.setState({
            dataSearch: dataSearch.concat(resJ.data),
            textSearch,
            page: page + 1,
            isEnd: resJ.data.length >= 10 ? false : true
         })
      })
      .catch(ex => console.error(ex))
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
      console.log(this.state.page)
      return (
         <View style={styles.fill}>
            <Header back={true} searchFunction={this._searchFunction} onChangeText={this._onChangeText} textSearch={this.state.textSearch} search={true} navigation={this.props.navigation} />
            {  this.state.dataSearch.length > 0 ?
               <View style={styles.fill}>
                  <FlatList
                     contentContainerStyle={styles.flatList}
                     numColumns={2}
                     onEndReachedThreshold={0.2}
                     onEndReached={() => this._onEndReached()}
                     data={this.state.dataSearch}
                     keyExtractor={(item, index) => `${item.id}`}
                     renderItem={({item}) => <SearchResultBox item={item} navigation={this.props.navigation} />}
                  />
               </View>
               : <Loading />
            }
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
      // flex: 1,
      paddingHorizontal: 10,
   }
})

