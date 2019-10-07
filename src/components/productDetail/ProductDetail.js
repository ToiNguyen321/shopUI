import React, { Component } from "react";
import { Animated, TouchableOpacity, View, Dimensions, StyleSheet, BackHandler } from "react-native";
import { ScrollableTab, Tab, TabHeading, Tabs } from "native-base";
import Header from "../Header";
import ProductSlider from "./ProductSlider";
import ProductInfoTop from "./ProductInfoTop";
import ProductAddCartBottom from "./ProductAddCartBottom";
import ProductTabOne from "./ProductTabOne";
import ProductTabTwo from "./ProductTabTwo";
import ProductTabThree from "./ProductTabThree";

const IMAGE_HEIGHT = 200;
const HEADER_HEIGHT = 0;
const SCROLL_HEIGHT = IMAGE_HEIGHT - HEADER_HEIGHT;
const THEME_COLOR = "rgba(255,255,255, 1)";
const FADED_THEME_COLOR = "rgba(85,186,255, 0.8)";
const BGR = 'rgba(0,0,0,0)';
export default class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      height: 500
    };
  }

  nScroll = new Animated.Value(0);
  scroll = new Animated.Value(0);
  textColor = this.scroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT / 5, SCROLL_HEIGHT],
    outputRange: [THEME_COLOR, FADED_THEME_COLOR, "white"],
    extrapolate: "clamp"
  });
  tabY = this.nScroll.interpolate({
    inputRange: [0, SCROLL_HEIGHT, SCROLL_HEIGHT + 1],
    outputRange: [0, 0, 1]
  });
  heights = [300, 300, 300];
  tabContent = (x, i) =>{
    
    let render = <ProductTabOne />
    if(i == 1){
      render = <ProductTabTwo />
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
    
    console.log('componentDidMount')
    this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._hardwareBackPress);
  }
  componentWillUnmount() {
    this.backHandler.remove()
  }
  _hardwareBackPress = ()=>{
    return false;
  }
  isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 50;
    return layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom && layoutMeasurement.height + contentOffset.y <=
      contentSize.height;
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Welcome'} back={true} navigation={this.props.navigation} />
        <View style={{ height: 10}} />
        <ProductInfoTop />
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={
            Animated.event([
            { nativeEvent: { contentOffset: { y: this.nScroll } } }], 
            { useNativeDriver: true,
              listener: ({nativeEvent}) => {
                  if (this.isCloseToBottom(nativeEvent)) {
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
            <ProductSlider />
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
              {this.tabContent(15, 0)}
            </Tab>
            <Tab heading="Details">
              {this.tabContent(15, 1)}
            </Tab>
            <Tab heading="Reviews">
              {this.tabContent(17, 2)}
            </Tab>
          </Tabs>
        </Animated.ScrollView>
        <ProductAddCartBottom />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  renderTabBar: {
    zIndex: 1, 
    backgroundColor: BGR
  },
  scrollTab: { backgroundColor: 'white', },
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