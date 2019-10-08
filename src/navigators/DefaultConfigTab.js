import React, { PureComponent } from 'react';
import { Icon } from 'native-base';
import IconTab from './IconTab';


export default defaultNavigationOptions = ( navigation ) => ({
   tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      let type;
      if (routeName === 'Home') {
         iconName = `home`;
      } else if (routeName === 'Search') {
         iconName = `search`;
         type='Feather';
      }
      // You can return any component that you like here!
      return <IconTab badgeCount={0} type={type} name={iconName} size={25} color={tintColor} />;
   },
})