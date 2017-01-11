'use strict';

import React, { Component } from 'react';
import HomeScreen from './HomeScreen';
import ExpressionScreen from './ExpressionScreen';

import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

const Router = createRouter(() => ({
  home: () => HomeScreen,
  expression: () => ExpressionScreen,
}));

export default class DGBMobile extends Component {
  render() {
    return (
      <NavigationProvider router={Router}>
        <StackNavigation initialRoute={Router.getRoute('home')} />
      </NavigationProvider>
    );
  }
}
