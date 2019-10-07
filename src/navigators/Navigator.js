import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import transitionConfig from './TransitonConfig';
import OpenApp from '../components/openApp/OpenApp';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import Search from '../components/search/Search';
import ProductDetail from '../components/productDetail/ProductDetail';



const stackHome = createStackNavigator(
   {
      Home: {
         screen: Home
      }
   },
   {
      initialRouteName: 'Home',
      transitionConfig,
      defaultNavigationOptions: {
         header: null,
         gesturesEnabled: false,
      }
   }
)

const bottomTabNavigator = createBottomTabNavigator({
   Home: {
      screen: stackHome
   },
   Search: {
      screen: Search
   }
})

const stackProduct = createStackNavigator(
   {
      OpenApp: {
         screen: OpenApp
      },
      Login: {
         screen: Login
      },
      Home: {
         screen: bottomTabNavigator
      },
      ProductDetail: {
         screen: ProductDetail,
      },
   },
   {
      initialRouteName: 'OpenApp',
      transitionConfig,
      defaultNavigationOptions: {
         header: null,
         gesturesEnabled: false,
      }
   }
)

export default createAppContainer(stackProduct);