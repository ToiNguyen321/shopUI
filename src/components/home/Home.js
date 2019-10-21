import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, ActivityIndicator } from 'react-native';
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
    this.props.actionFetchDataProducts();
  }
  _hardwareBackPress = () => {
    return true;
  }
  renderBox = () => {
    return this.props.dataProducts.data.map(item => {
      if(item.products.length > 0)
      return(
        <Animated.View key={`${item.id}`} style={[styles.boxProduct]}>
        <BoxProduct 
          key={`${item.id}`}
          navigate={this.props.navigation.navigate} 
          title={item.name} 
          dataProducts={item.products} 
          onScroll={this._onScroll}
          idCatalog={item.id}
        />
      </Animated.View>)
    })

  }
    

  render() {
    // console.log(this.props.dataProducts)
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
            this.props.dataProducts.data.length > 0 ?
              this.renderBox()
            : <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
              </View>
          }
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