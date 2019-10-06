import React, { Component } from "react";
import { Animated, Dimensions, Platform, Text, TouchableOpacity, View } from "react-native";
import { List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs } from "native-base";
import Header from "../Header";
import ProductSlider from "./ProductSlider";
import ProductInfoTop from "./ProductInfoTop";
import ProductAddCartBottom from "./ProductAddCartBottom";

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
    this.nScroll.addListener(Animated.event([{ value: this.scroll }], { useNativeDriver: false }));
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
  tabContent = (x, i) =>
    <View style={{ height: this.state.height + 70 }}>
      <List onLayout={({ nativeEvent: { layout: { height } } }) => {
        this.heights[i] = height;
        if (this.state.activeTab === i) this.setState({ height })
      }}>
        {new Array(x).fill(null).map((_, i) => <Item key={i}><Text>Item {i}</Text></Item>)}
      </List>
    </View>;
  heights = [500, 500, 500];

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title={'Welcome'} back={true} navigation={this.props.navigation} />
        <ProductInfoTop />
        <Animated.ScrollView
          scrollEventThrottle={5}
          showsVerticalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: this.nScroll } } }], { useNativeDriver: true })}
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
                style={{ transform: [{ translateY: this.tabY }], zIndex: 1, backgroundColor: BGR }}>
                <ScrollableTab {...props}
                  style={{ backgroundColor: BGR, }}
                  renderTab={(name, page, active, onPress, onLayout) => (
                    <TouchableOpacity key={page}
                      onPress={() => onPress(page)}
                      onLayout={onLayout}
                      activeOpacity={0.4}>
                      <Animated.View
                        style={{
                          flex: 1,
                          backgroundColor: BGR
                        }}>
                        <TabHeading scrollable
                          style={{
                            backgroundColor: active ? "#FF6969" : null,
                            marginTop: 5,
                            height: 40,
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 100,
                            borderRadius: 30,
                          }}
                          active={active}>
                          <Animated.Text style={{
                            fontWeight: active ? "bold" : "normal",
                            color: active ? '#FFF' : '#727C8E',
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
            <Tab heading="Product">
              {this.tabContent(3, 0)}
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