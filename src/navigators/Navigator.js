import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { transitionConfig, transitionConfigCheckOut } from './TransitionConfig';
import DefaultConfigTab from './DefaultConfigTab';

import OpenApp from '../components/openApp/OpenApp';
import Login from '../components/login/Login';
import Home from '../components/home/Home';
import Search from '../components/search/Search';
import ProductDetail from '../components/productDetail/ProductDetail';
import SearchResult from '../components/search/searchResult/SearchResult';
import Cart from '../components/cart/Cart';
import CheckOut from '../components/checkOut/CheckOut';
import CheckOutSuccess from '../components/checkOutSuccess/CheckOutSuccess';
import SignUp from '../components/signUp/SignUp';
import ProductMore from '../components/product/ProductMore.js';




const stackHome = createStackNavigator(
   {
      Home: {
         screen: Home
      }
   },
   {
      initialRouteName: 'Home',
      // transitionConfig,
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
   },
   Cart: {
      screen: Cart
   }
},
   {
      defaultNavigationOptions: ({ navigation }) => DefaultConfigTab(navigation),
      tabBarOptions: {
         activeTintColor: '#FF6969',
         inactiveTintColor: '#515C6F',
         labelStyle: {
            fontSize: 12,
         },
         keyboardHidesTabBar: true,
         style: {
            backgroundColor: '#FFF',
         },
      },
   }
)

const stackProduct = createStackNavigator(
   {
      OpenApp: {
         screen: OpenApp
      },
      Login: {
         screen: Login
      },
      SignUp: {
         screen: SignUp
      },
      Home: {
         screen: bottomTabNavigator
      },
      ProductMore: {
         screen: ProductMore,
      },
      ProductDetail: {
         screen: ProductDetail,
      },
      SearchResult: {
         screen: SearchResult,
      },
      CheckOut: {
         screen: CheckOut,
      },
      CheckOutSuccess: {
         screen: CheckOutSuccess
      }
   },
   {
      initialRouteName: 'Home',
      headerMode: 'none',
      mode: 'modal',
      transitionConfig,
      defaultNavigationOptions: {
         header: null,
         gesturesEnabled: false,
      }
   }
)

export default createAppContainer(stackProduct);