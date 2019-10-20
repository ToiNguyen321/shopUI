import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, BackHandler } from 'react-native';
import * as actions from '../../redux/actions';
import { connect } from 'react-redux';
import Header from '../Header';
import BestSale from './BestSale';
import BoxProduct from './BoxProduct';
import { ScrollView } from 'react-native-gesture-handler';
import { dataProducts } from '../../common/dataProduct';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataListCategories: [
        { title: "Popular Deals" },
        { title: "Popular Clear" },
      ],
      dataProducts: dataProducts,
      scrollY: new Animated.Value(0)
    }
    this._onScroll = Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              y: this.state.scrollY
            }
          }
        }
      ],
    )

  }
  componentDidMount() {
    let url = 'Api';
    let data = { cmd: 3 };
    this.props.actionFetchDataProducts()
    // setTimeout(() => this.props.actionFetchDataProducts(), 4000 )
    // fetchPost(url, data, (dataProducts) => {
    //   console.log(dataProducts)
    //   this.setState({
    //     dataProducts
    //   })
    // })
    //   console.log(url)
    //   fetch(`http://192.168.1.34/ShopAny/api/Api?data=` + `${JSON.stringify(data)}`)
    //  .then(res => res.json())
    //  .then(resJson => this.setState({
    //     dataListCategories: this.state.dataListCategories,
    //     dataProducts: resJson.data
    //   }))
    //  .catch(ex => console.log(ex))
  }
  _hardwareBackPress = () => {
    return true;
  }
  renderBox = () => {
    return (
      <Animated.View key={`${1}`} style={[styles.boxProduct]}>
        <BoxProduct navigate={this.props.navigation.navigate} title={"xxx"} data={this.props.dataProducts.data} onScroll={this._onScroll} />
      </Animated.View>
    )
  }
    

  render() {
    console.log(this.props.dataProducts)
    const translateY = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, -200],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <Header title={'Welcome'} back={false} navigation={this.props.navigation} />
        <ScrollView style={styles.container}>
          <Animated.View style={[styles.bestSale, { transform: [{ translateY }] }]}>
            <BestSale />
          </Animated.View>
          {
            this.props.dataProducts.isFetching && <Text>...loading</Text>
          }
          {
            this.props.dataProducts.data.length ?
            this.renderBox()
            : null
          }
          {/* {
            this.state.dataListCategories.map((item,index) => */}
          {

          }

          {/* )
          } */}
        </ScrollView>
      </View>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    dataProducts: state.products
  }
}
export default connect(mapStateToProps, actions)(Home)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bestSale: {
    height: 180,
  },
  boxProduct: {
    flex: 1,
  }
})