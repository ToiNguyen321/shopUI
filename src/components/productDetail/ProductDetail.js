import React, { Component } from "react";
import { Animated, TouchableOpacity, View, StyleSheet, BackHandler } from "react-native";
import { ScrollableTab, Tab, TabHeading, Tabs } from "native-base";
import { connect } from 'react-redux'
import * as actions from '../../redux/actions';
import { dataProducts } from "../../common/dataProduct";
import { isObjEmpty } from "../../common/Helper";
import Header from "../Header";
import ProductSlider from "./ProductSlider";
import ProductInfoTop from "./ProductInfoTop";
import ProductAddCartBottom from "./ProductAddCartBottom";
import ProductTabOne from "./ProductTabOne";
import ProductTabTwo from "./ProductTabTwo";
import ProductTabThree from "./ProductTabThree";
import { fetchDataGet } from "../../common/Api";
import { CMD, IMAGE } from "../../config";
import Loading from "../loading/Loading";



const IMAGE_HEIGHT = 200;
const HEADER_HEIGHT = 0;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const BGR = 'rgba(0,0,0,0)';
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      height: 500,
      colorActive: 0,
      idProduct: this.props.navigation.getParam('id'),
      dataProductDetail: {}
    };
  }

  nScroll = new Animated.Value(0);
  tabY = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1]
  });
  heights = [300, 300, 300];

  tabContent = (item, i) =>{
    let render = <ProductTabOne colorActive={this.state.colorActive} _changeColorActive={this._changeColorActive} />
    if(i === 1){
      render = <ProductTabTwo description={item.content} />
    }else if(i === 2){
      render = <ProductTabThree />
    }
    return (
      <View style={{ height: this.state.height + 70 }}>
        <View onLayout={({ nativeEvent: { layout: { height } } }) => {
          this.heights[i] = height;
          if (this.state.activeTab === i) this.setState({ height })
        }}>
          {
            render
          }
        </View>
    </View>
    )
  }

  componentDidMount(){
    //Trả về 1 giá trị thỏa mãn
    let data = { cmd: CMD.GET_PRODUCT, idProduct: this.props.navigation.getParam('id') };
    let url = 'Api?data='+JSON.stringify(data);
    fetchDataGet(url)
    .then(res=>res.json())
    .then(resJ => {
      this.setState({
        dataProductDetail: resJ.data[0]
      })
    })
    .catch(ex => console.error(ex))
  }
  _addCart = () => {
    let productCart = {id: this.state.idProduct, amount: 1, info: this.state.dataProductDetail };
    this.props.actionAddCart(productCart);
  }
  _changeColorActive = (colorActive) => {
    this.setState((prevState, prevProps) => {
          if(prevState.colorActive !== colorActive)
            return({ colorActive }) 
      }
    )
  }
  
  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom && layoutMeasurement.height + contentOffset.y <=
      contentSize.height;
  };

  render() {
    const { dataProductDetail } = this.state
    // console.log(dataProductDetail)
    if(isObjEmpty(dataProductDetail))
      return <Loading />;
    let { name, price, rate, image } = dataProductDetail
    return (
      <View style={{ flex: 1 }}>
        <Header  back={true} navigation={this.props.navigation} />
        <View style={{ height: 10}} />
        <ProductInfoTop name={name} price={price} rate={rate}/>
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={
            Animated.event([
            { nativeEvent: { contentOffset: { y: this.nScroll } } }], 
            { useNativeDriver: true,
              listener: ({nativeEvent}) => {
                  if (this.isCloseToBottom(nativeEvent) && this.state.activeTab === 2) {
                    console.log('xxxxxxxxxxx')
                  }
                },
            }
          )}
          style={{ zIndex: 0 }}>
          <Animated.View style={{
            transform: [{ translateY: Animated.multiply(this.nScroll, 0.65) }],
            backgroundColor: BGR
          }}>
            <ProductSlider image={`${IMAGE}product/${image}`} />
          </Animated.View>
          <Tabs
            locked
            prerenderingSiblingsNumber={3}
            onChangeTab={({ i }) => {
              this.setState({ height: this.heights[i], activeTab: i })
            }}
            renderTabBar={(props) =>
              <Animated.View
                style={[styles.renderTabBar , { transform: [{ translateY: this.tabY }] }]}>
                <ScrollableTab {...props}
                  style={styles.scrollTab}
                  renderTab={(name, page, active, onPress, onLayout) => (
                    <TouchableOpacity key={page}
                      onPress={() => onPress(page)}
                      onLayout={onLayout}
                      activeOpacity={0.4}>
                      <Animated.View
                        style={styles.viewTab}>
                        <TabHeading 
                          style={[styles.TabHeading, {backgroundColor: active ? "#FF6969" : null}]}
                          active={active}>
                          <Animated.Text style={{
                            color: active ? '#FFF' : '#727C8E',
                            fontWeight: active ? "bold" : "normal",
                            fontSize: 16
                          }}>
                            {name}
                          </Animated.Text>
                        </TabHeading>
                      </Animated.View>
                    </TouchableOpacity>
                  )}
                />
              </Animated.View>
            }>
            <Tab heading="Product" tabStyle={{ padding: 0 }}>
              {this.tabContent(dataProductDetail, 0)}
            </Tab>
            <Tab heading="Details" tabStyle={{ padding: 0 }}>
              {this.tabContent(dataProductDetail, 1)}
            </Tab>
            <Tab heading="Reviews" tabStyle={{ padding: 0 }}>
              {this.tabContent(dataProductDetail, 2)}
            </Tab>
          </Tabs>
        </Animated.ScrollView>
        <ProductAddCartBottom _addCart={this._addCart} />
      </View>
    )
  }
}
export default connect(null, actions)(ProductDetail);
const styles = StyleSheet.create({
  renderTabBar: {
    zIndex: 1, 
    backgroundColor: BGR
  },
  scrollTab: { 
    backgroundColor: 'white' 
  },
  viewTab: {
    flex: 1,
    backgroundColor: BGR
  },
  TabHeading: {
    marginTop: 5,
    marginBottom: 5,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    borderRadius: 30,
  }
})