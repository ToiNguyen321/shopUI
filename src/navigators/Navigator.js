import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import transitionConfig from './TransitonConfig';
import OpenApp from '../components/openApp/OpenApp';
import Login from '../components/login/Login';
import { createAppContainer } from 'react-navigation';

const StackNavigator = createStackNavigator({
   OpenApp: {
      screen: OpenApp
   },
   Login: {
      screen: Login
   }
},
{
   transitionConfig,
   defaultNavigationOptions: {
      header: null,
   }
}
)
export default createAppContainer(StackNavigator);