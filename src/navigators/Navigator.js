import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import transitionConfig from './TransitonConfig';
import OpenApp from '../components/openApp/OpenApp';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import Search from '../components/search/Search';
import ProductDetail from '../components/product/productDetail/ProductDetail';



const stackNavigator = createStackNavigator(
   {
      OpenApp: {
         screen: OpenApp
      },
      Login: {
         screen: Login
      },
      Home: {
         screen: Home
      },
      ProductDetail: {
         screen: ProductDetail
      },
      Search: {
         screen: Search
      }
   },
   {
      initialRouteName: 'Search',
      transitionConfig,
      defaultNavigationOptions: {
         header: null,
         gesturesEnabled: false,
      }
   }
)

const bottomTabNavigator = createBottomTabNavigator({
   Home: {
      screen: stackNavigator
   },
   Search: {
      screen: Search
   }
})
export default createAppContainer(stackNavigator);