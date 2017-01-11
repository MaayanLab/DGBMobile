import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeScreen from './app/HomeScreen';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
}));

class DGBMobile extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}

AppRegistry.registerComponent('DGBMobile', () => DGBMobile);
