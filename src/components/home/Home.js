import React, { Component } from 'react';
import { View, Text, StyleSheet, Animated, BackHandler } from 'react-native';
import Header from '../Header';
import BestSale from './BestSale';
import BoxProduct from './BoxProduct';
import { ScrollView } from 'react-native-gesture-handler';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataListCategories: [
        {title: "Popular Deals"},
        {title: "Popular Clear"},
      ],
      data: [
        { id: 1, image: require('../../assets/images/products/Image1.png') },
        { id: 2, image: require('../../assets/images/products/Image2.png') },
        { id: 3, image: require('../../assets/images/products/Image3.png') },
        { id: 4, image: require('../../assets/images/products/Image5.png') },
        { id: 5, image: require('../../assets/images/products/Image6.png') },
        { id: 6, image: require('../../assets/images/products/Image2.png') },
        { id: 7, image: require('../../assets/images/products/Image4.png') },
        { id: 8, image: require('../../assets/images/products/Image6.png') },
        { id: 9, image: require('../../assets/images/products/Image5.png') },
        { id: 10, image: require('../../assets/images/products/Image1.png') }
      ],
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
  componentDidMount(){
    console.log('componentDidMount')
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._hardwareBackPress);
  }
  componentWillUnmount() {
    console.log('Remove')
    this.backHandler.remove()
  }
  _hardwareBackPress = ()=>{
    return true;
  }
  render() {
    const translateY = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [0, -200],
      extrapolate: 'clamp'
    })
    const marginTop = this.state.scrollY.interpolate({
      inputRange: [0, 200],
      outputRange: [200, 0],
      extrapolate: 'clamp'
    })
    return (
      <View style={styles.container}>
        <Header title={'Welcome'} back={false} navigation={this.props.navigation} />
        <ScrollView style={styles.container}>
          <Animated.View style={[ styles.bestSale, {transform: [ {translateY} ]}]}>
            <BestSale />
          </Animated.View>
          {
            this.state.dataListCategories.map((item,index) =>
              <Animated.View key={`${index}`} style={[styles.boxProduct]}>
                <BoxProduct navigate={this.props.navigation.navigate} title={item.title} data={this.state.data} onScroll={this._onScroll} />
              </Animated.View>
            )
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bestSale: {
    // position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    height: 180,
  },
  boxProduct: {
    flex: 1,
  }
})