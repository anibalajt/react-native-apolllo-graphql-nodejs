import React from 'react';
import { StackNavigator } from 'react-navigation';

import Login from '../Login.js'
import DetailsScreen from '../DetailsScreen.js'

export const Root = StackNavigator({
  Login: {
    screen: Login,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
