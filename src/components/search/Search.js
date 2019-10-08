import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Header from '../Header';
import { TextInput, FlatList,  TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataViewNew: [
        {id: 1},
        {id: 4},
        {id: 3},
        {id: 2},
      ],
      textSearch: ""
    };
  }
  _viewNew = (item, index) => {
    return (
      <TouchableOpacity
        onPress={()=> this.props.navigation.navigate('ProductDetail')}
      >
        <View style={styles.viewNew}>
          <Image 
            source={require('../../assets/images/products/Image1.png')}
            style={styles.imageViewNew}  
          />
          <View style={styles.viewNewRight}>
            <Text style={styles.textViewNewRight} numberOfLines={1}>Red Cotton Scarf</Text>
            <Text style={styles.textViewNewRight} numberOfLines={1}>$11.99</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
  _viewSearch = (item, index) => {
    return (
      <TouchableOpacity
        key={`${index}`}
      >
        <Text style={styles.textRecommended}>Denim Jea</Text>
      </TouchableOpacity>
    )
  }
  _onEndEditing= () => {
    this.props.navigation.navigate('SearchResult', {textSearch: this.state.textSearch})
  }
  render() {
    return (
      <View>
        <Header title={'Search'} back={false} navigation={this.props.navigation} />
        
        <TextInput
          placeholder="Search Something"
          placeholderTextColor="rgba(81,92,111,0.5)"
          style={styles.textInput}
          onChangeText={(textSearch) => this.setState({textSearch})}
          onEndEditing = {this._onEndEditing}
        />
        <View>
          <View style={styles.viewNewTop}>
            <Text style={styles.textViewNew}>RECENTLY VIEWED</Text>
            <TouchableOpacity>
              <Text style={styles.textClearViewNew}>CLEAR</Text>
            </TouchableOpacity>
          </View>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={this.state.dataViewNew}
            keyExtractor={(item, index) => `${index}`}
            renderItem={({item, index}) => this._viewNew(item, index) }
          />
        </View>
        <View>
          <View style={styles.viewNewTop}>
            <Text style={styles.textViewNew}>RECOMMENDED</Text>
            <TouchableOpacity>
              <Text style={styles.textClearViewNew}>REFRESH</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20,}}>
            {
              this.state.dataViewNew.map((item, index) => this._viewSearch(item, index))
            }
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    fontSize: 16,
    marginTop: 20,
    marginHorizontal: 20, 
    backgroundColor: 'rgba(114,124,142,0.1)',
    borderRadius: 40,
    paddingVertical: 12,
    textAlign: 'center',
  },
  viewNewTop: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textViewNew: {
    fontSize: 16,
    color: 'rgba(81,92,111,0.5)',
    marginTop: 25,
    marginBottom: 15,
  },
  textClearViewNew: {
    color: '#FF6969',
    fontSize: 12,
    marginTop: 25,
    marginBottom: 15,
    fontWeight: '500',
  },  
  viewNew: {
    flexDirection: 'row',
    paddingRight: 5,
    marginLeft: 20,
    backgroundColor: 'rgba(243,245,248,0.4)',
    padding: 10,
    borderRadius: 5,
  },
  imageViewNew: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginRight: 10,
  },
  viewNewRight: {
    justifyContent: 'space-between',
  },
  textViewNewRight: {
    color: '#515C6F',
    fontSize: 15,
    paddingRight: 10,
  },
  viewRecommended: {
    
  },
  textRecommended: {
    fontSize: 14,
    color: '#515C6F',
    paddingHorizontal: 10,
    paddingVertical: 7,
    marginRight: 10,
    backgroundColor: 'rgba(243,245,248,0.5)',
    borderRadius: 7,
    marginBottom: 10,
  }
})