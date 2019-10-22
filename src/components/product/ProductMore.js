import React, { Component } from 'react'
import { Text, StyleSheet, View, Keyboard } from 'react-native'
import Header from '../Header'
import { FlatList } from 'react-native-gesture-handler'
import ProductMoreBox from './ProductMoreBox'
import { fetchDataGet } from '../../common/Api'
import { CMD } from '../../config'
import Loading from '../loading/Loading'

export default class ProductMore extends Component {
   constructor(props){
      super(props)
      this.state={
         dataProductMore: [],
         dataSearch: [],
         idCatalog: 0,
         page: 1,
         isEnd: false,
         textSearch: ''
      }
   }
   componentDidMount(){
      let idCatalog = this.props.navigation.getParam('idCatalog', 0);
      let { page } = this.state;
      let data = { cmd: CMD.GET_LIST_PRODUCT, idCatalog: idCatalog, page: page };
      this.fetchData(data);
   }
   _onEndReached = () => {
      let idCatalog = this.props.navigation.getParam('idCatalog', 0);
      let { page } = this.state;
      let data = { cmd: CMD.GET_LIST_PRODUCT, idCatalog: idCatalog, page: page };
      console.log("_onEndReached")
      this.fetchData(data);
   }
   fetchData(data){
      let { page, dataProductMore, isEnd } = this.state;
      if(isEnd === true || typeof(data) !== 'object') return false;
      let url = 'Api?data='+JSON.stringify(data);
      console.log(url)
      fetchDataGet(url)
      .then(res=>res.json())
      .then(resJ => {
         this.setState({
            dataProductMore: dataProductMore.concat(resJ.data[0].products),
            idCatalog: data.idCatalog,
            page: page + 1,
            isEnd: resJ.data[0].products.length >= 10 ? false : true
         })
      })
      .catch(ex => console.error(ex))
   }
   _onChangeText = (textSearch) => {
      this.setState({
         textSearch
      })
   }
   _searchFunction = async () => {
      let { textSearch, idCatalog } = this.state;
      // if(textSearch === '') return false;
      await this.setState({
         page: 1,
         dataProductMore: [],
         isEnd: false
      })
      let data = { 
         cmd: CMD.GET_LIST_PRODUCT, 
         idCatalog: idCatalog, 
         page: 1, 
         nameSearch: textSearch  
      };
      this.fetchData(data);
      Keyboard.dismiss();
   }
   render() {
      let { isEnd, dataProductMore } = this.state;
      return (
         <View style={styles.fill}>
            <Header back={true} searchFunction={this._searchFunction} onChangeText={this._onChangeText} textSearch={this.state.textSearch} search={true} navigation={this.props.navigation} />
            {  dataProductMore.length > 0 ?
               <View style={styles.fill}>
                  <FlatList
                     contentContainerStyle={styles.flatList}
                     numColumns={2}
                     onEndReachedThreshold={0.2}
                     onEndReached={() => this._onEndReached()}
                     data={dataProductMore}
                     keyExtractor={(item, index) => `${item.id}`}
                     renderItem={({item}) => <ProductMoreBox item={item} navigation={this.props.navigation} />}
                  />
               </View>
               : (isEnd === true ? 
                     <View style={styles.dataNull}>
                        <Text>Không có dữ liệu</Text>
                     </View> 
                  : <Loading />)
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
   },
   dataNull: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
   }
})

