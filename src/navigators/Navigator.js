import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import transitionConfig from './TransitonConfig';
import OpenApp from '../components/openApp/OpenApp';
import Login from '../components/login/Login';
import Home from '../components/home/Home';



const StackNavigator = createStackNavigator({
   OpenApp: {
      screen: OpenApp
   },
   Login: {
      screen: Login
   },
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
export default createAppContainer(StackNavigator);